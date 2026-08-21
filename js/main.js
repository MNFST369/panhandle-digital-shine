const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const setNavOpen = (open) => {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
};

toggle?.addEventListener("click", () => {
  setNavOpen(!nav.classList.contains("open"));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 8);
  },
  { passive: true }
);

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.textContent = "Sending…";
  statusEl.className = "form-status";

  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (result.success) {
      form.reset();
      statusEl.textContent = "Thank you. We’ll reach out within one business day.";
      statusEl.classList.add("success");
      return;
    }

    throw new Error(result.message || "Could not send the form.");
  } catch (error) {
    statusEl.textContent =
      "Something went wrong. Please call (850) 319-1704 or email shokhmars@gmail.com.";
    statusEl.classList.add("error");
  }
});
