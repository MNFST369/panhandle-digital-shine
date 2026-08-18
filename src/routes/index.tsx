import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Monitor,
  MousePointerClick,
  MapPin,
  Share2,
  MessageCircle,
  ShieldCheck,
  Waves,
  HeartHandshake,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import heroBg from "@/assets/hero-coastal.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const TITLE = "Mars Consulting | Web Design in Panama City Beach, FL";
const DESCRIPTION =
  "Websites, landing pages, Google Business listings, and social media profiles for Panama City Beach and Florida Panhandle businesses. Free consultation, no tech headaches.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mars Consulting",
          description: DESCRIPTION,
          areaServed: "Panama City Beach and the Florida Panhandle",
          telephone: "+1-850-555-0142",
          email: "hello@marsconsulting.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Panama City Beach",
            addressRegion: "FL",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Design",
    text: "A professional site that makes a great first impression and turns visitors into customers.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    text: "A focused, high-converting page for a specific promotion, product, or campaign.",
  },
  {
    icon: MapPin,
    title: "Google Business Listings",
    text: "Show up when people search for you, with accurate hours, photos, and reviews that build trust.",
  },
  {
    icon: Share2,
    title: "Social Media Profiles",
    text: "Professional, on-brand social pages so you look active and credible online.",
  },
];

const REASONS = [
  {
    icon: MessageCircle,
    title: "No tech jargon",
    text: "We explain everything in plain English, so you always know what you are getting.",
  },
  {
    icon: ShieldCheck,
    title: "Handled start to finish",
    text: "We take care of the setup, the details, and the follow-up. You just approve it.",
  },
  {
    icon: Waves,
    title: "Local to the beach",
    text: "Based in Panama City Beach and working with businesses across the Panhandle.",
  },
  {
    icon: HeartHandshake,
    title: "Personal support",
    text: "You talk to a real person who knows your business, never a call center.",
  },
];

const WORK = [
  { img: work1, name: "Sandbar Grill", tag: "Website", text: "A beachfront restaurant site with menus and easy directions." },
  { img: work2, name: "Panhandle Charters", tag: "Landing Page", text: "One clear page built to book more fishing trips." },
  { img: work3, name: "Coastal Clean Co.", tag: "Google Listing", text: "A complete listing with photos, hours, and fresh reviews." },
  { img: work4, name: "Salt & Sun Salon", tag: "Social Media", text: "Polished social profiles that match the shop's look." },
  { img: work5, name: "Gulf View Realty", tag: "Website", text: "Beach home listings that are simple to browse on a phone." },
  { img: work6, name: "Bayside Contracting", tag: "Website", text: "A trustworthy site that brings in more quote requests." },
];

const SERVICE_OPTIONS = [
  "Website Design",
  "Landing Page",
  "Google Business Listing",
  "Social Media Profiles",
  "Not Sure — Help Me Decide",
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-ocean text-primary-foreground">
            M
          </span>
          Mars Consulting
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          className="h-12 w-12 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="!size-6" /> : <Menu className="!size-6" />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-4 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 text-lg font-semibold text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-ocean opacity-90" />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
          Panama City Beach, Florida
        </p>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          More Customers Start Online. Let's Get You Found.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          Websites, Google listings, and social profiles built for Panama City Beach and Panhandle
          businesses — no tech headaches, just results.
        </p>
        <div className="mt-9">
          <Button asChild variant="cta" size="xl">
            <a href="#contact">Get Your Free Consultation</a>
          </Button>
        </div>
        <p className="mt-5 text-base text-primary-foreground/80">
          Free, friendly, and no obligation.
        </p>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What We Do"
          title="Simple ways to get your business found"
          text="Pick what you need, or let us help you decide. Everything is quote-based and built for you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
                <s.icon className="!size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="cta" size="xl">
            <a href="#contact">Get Your Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="about" className="bg-sand py-20 text-sand-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Mars Consulting"
          title="Technology made easy, by someone local"
          text="If computers are not your thing, that is exactly why we are here."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} className="flex gap-5 rounded-2xl bg-card p-7 shadow-soft">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-ocean text-primary-foreground">
                <r.icon className="!size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-primary">{r.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Featured Work"
          title="A look at what we build"
          text="Real projects for real Panhandle businesses."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w) => (
            <article
              key={w.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <img
                src={w.img}
                alt={`${w.name} project preview`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
                  {w.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary">{w.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you! We'll reach out within one business day.");
    }, 500);
  }

  return (
    <section id="contact" className="bg-gradient-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your business"
          text="Fill this out and we'll reach out within one business day — no pressure, no obligation."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-7 shadow-lift sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Your name
                </Label>
                <Input id="name" name="name" required autoComplete="name" className="h-14 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="h-14 text-base"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-14 text-base"
              />
            </div>
            <div className="mt-6 space-y-2">
              <Label htmlFor="service" className="text-base font-semibold">
                What service are you interested in?
              </Label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="h-14 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6 space-y-2">
              <Label htmlFor="message" className="text-base font-semibold">
                Tell us a bit about your business{" "}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea id="message" name="message" rows={4} className="text-base" />
            </div>
            <Button type="submit" variant="cta" size="xl" className="mt-8 w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send My Free Consultation Request"}
            </Button>
          </form>

          <aside className="rounded-2xl bg-gradient-ocean p-7 text-primary-foreground shadow-lift sm:p-9">
            <h3 className="text-2xl font-bold">Prefer to talk?</h3>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/90">
              Call or email anytime. We are happy to answer questions before you decide anything.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+18505550142"
                className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-5 py-4 text-lg font-semibold transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="!size-6" aria-hidden="true" />
                (850) 555-0142
              </a>
              <a
                href="mailto:hello@marsconsulting.com"
                className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-5 py-4 text-base font-semibold transition-colors hover:bg-primary-foreground/20 sm:text-lg"
              >
                <Mail className="!size-6" aria-hidden="true" />
                hello@marsconsulting.com
              </a>
            </div>
            <p className="mt-8 text-base text-primary-foreground/80">
              Serving Panama City Beach and the Florida Panhandle.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xl font-extrabold">Mars Consulting</p>
            <p className="mt-3 max-w-sm text-base text-primary-foreground/80">
              Web design and digital marketing that helps local businesses get found online.
            </p>
            <p className="mt-4 text-base text-primary-foreground/80">
              Proudly serving Panama City Beach and the Florida Panhandle.
            </p>
          </div>
          <div className="sm:text-right">
            <a href="tel:+18505550142" className="block text-base font-semibold hover:underline">
              (850) 555-0142
            </a>
            <a
              href="mailto:hello@marsconsulting.com"
              className="mt-2 block text-base font-semibold hover:underline"
            >
              hello@marsconsulting.com
            </a>
            <div className="mt-5 flex gap-3 sm:justify-end">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Mars Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Why />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
