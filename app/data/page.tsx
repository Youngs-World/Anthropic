"use client";

import { motion } from "framer-motion";
import { BackLink, Wordmark } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/data/Counter";
import { spring, LINKS } from "@/lib/ui";

const METRICS = [
  { to: 2, label: "products shipped to real users" },
  { to: 6, label: "years in the trade before code" },
  { to: 15, label: "countries localized in Sip" },
  { to: 4, label: "interactive résumés (incl. this)" },
  { to: 1, label: "paying customer, FireCode AI" },
];

const SKILLS = [
  { name: "React", pct: 95 },
  { name: "TypeScript", pct: 88 },
  { name: "Next.js", pct: 88 },
  { name: "CSS · design systems", pct: 92 },
  { name: "Framer Motion · animation", pct: 90 },
  { name: "Claude · AI integration", pct: 85 },
  { name: "Supabase · PostgreSQL", pct: 82 },
  { name: "Cloudflare · deploy", pct: 80 },
];

const TIMELINE = [
  { year: "2019", title: "The trade", body: "Started at AVF Systems — shop → field tech → system design across access control, fire, and security." },
  { year: "2024", title: "Self-taught", body: "Finished high school and started shipping software end to end. Couldn't not build things." },
  { year: "2025", title: "Shipped", body: "Sip on the App Store; FireCode AI live with a Claude assistant and a paying customer." },
  { year: "2026", title: "Four lenses", body: "Interactive résumé sites — a chat, a market UI, and the four-lens page you're reading." },
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
      <section className="wrap" style={{ paddingTop: 88, paddingBottom: 20 }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={spring.soft} style={{ maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>03 · Data-viz résumé</div>
          <h1 style={{ fontSize: "clamp(40px, 6.4vw, 66px)", lineHeight: 1.03 }}>
            A career, <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>by the numbers.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 26, maxWidth: 600 }}>
            The same story as the résumé — plotted, counted, and animated. Scroll and the numbers add themselves up.
          </p>
        </motion.div>
      </section>

      {/* metrics */}
      <section className="wrap" style={{ paddingTop: 46, paddingBottom: 20 }}>
        <div className="metrics-grid">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div>
                <div className="serif tnum" style={{ fontSize: "clamp(44px, 7vw, 62px)", lineHeight: 1, color: "var(--accent-deep)" }}>
                  <Counter to={m.to} />
                </div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.4, maxWidth: 170 }}>{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* skills */}
      <section className="wrap" style={{ paddingTop: 62, paddingBottom: 20 }}>
        <Reveal><div className="eyebrow" style={{ marginBottom: 28 }}>Where the hours went</div></Reveal>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="wrap" style={{ paddingTop: 66, paddingBottom: 20 }}>
        <Reveal><div className="eyebrow" style={{ marginBottom: 30 }}>The line that got me here</div></Reveal>
        <div style={{ borderTop: "1px solid var(--border-strong)", paddingTop: 4 }}>
          <div className="tl-grid" style={{ marginTop: -5 }}>
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...spring.snappy, delay: i * 0.08 }}
                    style={{ display: "block", width: 11, height: 11, borderRadius: 999, background: "var(--accent)", marginBottom: 16, boxShadow: "0 0 0 4px var(--bg)" }}
                  />
                  <div className="mono" style={{ fontSize: 13.5, color: "var(--accent-deep)", marginBottom: 8 }}>{t.year}</div>
                  <h3 style={{ fontSize: 21 }}>{t.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", marginTop: 9 }}>{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="wrap" style={{ paddingTop: 60, paddingBottom: 92 }}>
        <Reveal>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 36, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 460 }}>
              Numbers are the short version. The <a href="/talk" style={{ color: "var(--accent-deep)", fontWeight: 600 }}>chat</a> and the{" "}
              <a href="/brand" style={{ color: "var(--accent-deep)", fontWeight: 600 }}>story</a> are the long one.
            </p>
            <a href={`mailto:${LINKS.email}`} style={{ background: "var(--accent)", color: "#fff", fontSize: 15, fontWeight: 600, padding: "13px 22px", borderRadius: "var(--r-pill)" }}>
              {LINKS.email}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 500 }}>{name}</span>
          <span className="mono tnum" style={{ fontSize: 12.5, color: "var(--text-faint)" }}>{pct}</span>
        </div>
        <div style={{ height: 8, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: delay + 0.1 }}
            style={{ height: "100%", borderRadius: 999, background: "linear-gradient(90deg, var(--accent-deep), var(--accent))" }}
          />
        </div>
      </div>
    </Reveal>
  );
}
