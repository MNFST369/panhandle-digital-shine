export const BUSINESS = {
  name: "Mars Consulting",
  tagline: "More customers start online. Let's get you found.",
  description:
    "Web design and digital marketing consulting for local businesses and individuals across the Florida Panhandle.",
  location: "Panama City Beach, Florida",
  areaServed: "Panama City Beach and the Florida Panhandle",
  phone: "+1-850-555-0142",
  email: "hello@marsconsulting.com",
  pricing: "Quote-based. Free, friendly, no-obligation consultation.",
  reasons: [
    { title: "No tech jargon", text: "Everything explained in plain English." },
    { title: "Handled start to finish", text: "Setup, details, and follow-up are taken care of." },
    { title: "Local to the beach", text: "Based in Panama City Beach, serving the Panhandle." },
    { title: "Personal support", text: "You talk to a real person, never a call center." },
  ],
} as const;

export const SERVICES = [
  {
    slug: "website-design",
    title: "Website Design",
    text: "A professional site that makes a great first impression and turns visitors into customers.",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    text: "A focused, high-converting page for a specific promotion, product, or campaign.",
  },
  {
    slug: "google-business-listings",
    title: "Google Business Listings",
    text: "Show up when people search for you, with accurate hours, photos, and reviews that build trust.",
  },
  {
    slug: "social-media-profiles",
    title: "Social Media Profiles",
    text: "Professional, on-brand social pages so you look active and credible online.",
  },
] as const;

export const WORK = [
  { name: "Sandbar Grill", category: "Website", text: "A beachfront restaurant site with menus and easy directions." },
  { name: "Panhandle Charters", category: "Landing Page", text: "One clear page built to book more fishing trips." },
  { name: "Coastal Clean Co.", category: "Google Listing", text: "A complete listing with photos, hours, and fresh reviews." },
  { name: "Salt & Sun Salon", category: "Social Media", text: "Polished social profiles that match the shop's look." },
  { name: "Gulf View Realty", category: "Website", text: "Beach home listings that are simple to browse on a phone." },
  { name: "Bayside Contracting", category: "Website", text: "A trustworthy site that brings in more quote requests." },
] as const;
