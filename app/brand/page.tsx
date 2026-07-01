"use client";

import { motion } from "framer-motion";
import { BackLink, Wordmark } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { LINKS } from "@/lib/ui";

const WORK = [
  {
    title: "Sip: Drinks Abroad",
    meta: "React · Vite · Capacitor · App Store",
    body: "A premium, fully-offline iOS app — 15 countries, a hand-built design system, and a custom internationalization engine. Shipped solo.",
    href: LINKS.sip,
    cta: "App Store",
  },
  {
    title: "FireCode AI",
    meta: "React · Supabase · Cloudflare · Claude",
    body: "A full-stack SaaS platform with a live, Claude-powered assistant, row-level-security auth, and a first paying customer. Designed, built, and deployed solo.",
    href: LINKS.firecode,
    cta: "Visit",
  },
  {
    title: "An interactive résumé, four ways",
    meta: "Next.js · TypeScript · Framer Motion",
    body: "This site — plus a real-time chat, a prediction-market UI, and more. When the role is about craft, the work should be the argument.",
    href: "/",
    cta: "The four lenses",
  },
];

const PRINCIPLES = [
  { k: "01", t: "Design and build are one job.", b: "I don't hand a comp over a wall. I own the whole surface — type, motion, components, and the deploy that ships it." },
  { k: "02", t: "Ship, then refine.", b: "Real products in front of real people beat perfect plans. I get the thing live, then sweat it into shape." },
  { k: "03", t: "Sweat the details.", b: "Typography, easing curves, the 1px things nobody names but everybody feels. That's where craft actually lives." },
];

export default function Page() {
  return (
    <main>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <BackLink />
          <Wordmark />
        </div>
      </div>

      {/* hero */}
      <section className="wrap" style={{ paddingTop: 92, paddingBottom: 30 }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120, damping: 20 }} style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>02 · Anthropic-brand interactive page</div>
          <h1 style={{ fontSize: "clamp(40px, 6.4vw, 68px)", lineHeight: 1.02 }}>
            The web should feel <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>made by hand.</span>
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 28, maxWidth: 640 }}>
            I&apos;m Clayton Young — a design engineer who owns the whole surface: the type, the motion, the components,
            the deploy. This page is built the way I&apos;d build one of yours. Here&apos;s how I think, and what
            I&apos;ve shipped.
          </p>
        </motion.div>
      </section>

      {/* story */}
      <Section eyebrow="The short story">
        <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 20, fontSize: 18.5, lineHeight: 1.72, color: "var(--text)" }}>
          <p>
            I came up in the trades — six years in low-voltage electronic security and life-safety systems, where a
            small mistake has real consequences. It taught me to sweat the details and respect the edge cases.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            I taught myself to code because I couldn&apos;t <span style={{ fontStyle: "italic" }}>not</span> build
            things — and I started shipping real products end to end. Design, front-end, back-end, deploy. I like being
            the person who takes an idea all the way to something you can actually use.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            The web is where that instinct lives now. I care about how a page <span style={{ fontStyle: "italic" }}>feels</span>{" "}
            — the weight of the type, the settle of an animation, the moment a layout clicks. That&apos;s the craft this
            role is about, and it&apos;s the part I&apos;d do for free.
          </p>
        </div>
      </Section>

      {/* selected work */}
      <Section eyebrow="Selected work">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <a href={w.href} target={w.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ display: "block" }}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 20,
                    alignItems: "start",
                    padding: "26px 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div style={{ maxWidth: 640 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 27 }}>{w.title}</h3>
                      <span className="mono" style={{ fontSize: 12.5, color: "var(--text-faint)" }}>{w.meta}</span>
                    </div>
                    <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 10 }}>{w.body}</p>
                  </div>
                  <span style={{ whiteSpace: "nowrap", fontSize: 14, fontWeight: 600, color: "var(--accent-deep)", paddingTop: 8 }}>
                    {w.cta} →
                  </span>
                </motion.div>
              </a>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </Section>

      {/* principles */}
      <Section eyebrow="How I work">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.06}>
              <div>
                <div className="mono" style={{ fontSize: 13, color: "var(--accent-deep)", marginBottom: 12 }}>{p.k}</div>
                <h3 style={{ fontSize: 22, lineHeight: 1.2 }}>{p.t}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 12 }}>{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* closing */}
      <section className="wrap" style={{ paddingTop: 40, paddingBottom: 96 }}>
        <Reveal>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
            <h2 style={{ fontSize: "clamp(30px, 4.6vw, 46px)", maxWidth: 640 }}>
              Let&apos;s build something worth the craft.
            </h2>
            <div style={{ marginTop: 26, display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href={`mailto:${LINKS.email}`}
                style={{ background: "var(--accent)", color: "#fff", fontSize: 15, fontWeight: 600, padding: "13px 22px", borderRadius: "var(--r-pill)" }}
              >
                {LINKS.email}
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" style={{ fontSize: 15, fontWeight: 600, color: "var(--text-muted)" }}>GitHub ↗</a>
              <a href={LINKS.firecode} target="_blank" rel="noreferrer" style={{ fontSize: 15, fontWeight: 600, color: "var(--text-muted)" }}>FireCode AI ↗</a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 20 }}>
      <Reveal>
        <div className="eyebrow" style={{ marginBottom: 26 }}>{eyebrow}</div>
      </Reveal>
      {children}
    </section>
  );
}
