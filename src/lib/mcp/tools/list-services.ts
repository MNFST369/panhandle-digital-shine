import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the web design and digital marketing services Mars Consulting offers, optionally filtered by a search term.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional keyword to filter services by title or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const services = q
      ? SERVICES.filter((s) => `${s.title} ${s.text}`.toLowerCase().includes(q))
      : SERVICES;
    return {
      content: [
        {
          type: "text",
          text:
            services.length === 0
              ? `No services matched "${query}".`
              : services.map((s) => `${s.title} — ${s.text}`).join("\n"),
        },
      ],
      structuredContent: { services },
    };
  },
});
