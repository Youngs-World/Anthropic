"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BackLink, Wordmark, Mark } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { spring, LINKS } from "@/lib/ui";

const SWATCHES = [
  { name: "Ground", hex: "#f3efe6" },
  { name: "Surface", hex: "#fbf9f4" },
  { name: "Border", hex: "#e4ddce" },
  { name: "Clay", hex: "#cc785c" },
  { name: "Clay deep", hex: "#b15c3d" },
  { name: "Ink", hex: "#1b1813" },
  { name: "Muted", hex: "#6c6555" },
];

const TYPE = [
  { size: 44, label: "Display / Newsreader", text: "The whole surface.", serif: true },
  { size: 26, label: "Heading / Newsreader", text: "Design and build are one job.", serif: true },
  { size: 16, label: "Body / Inter", text: "I own the type, the motion, the components, and the deploy that ships it.", serif: false },
  { size: 13, label: "Mono / JetBrains Mono", text: "const craft = attention.to(details);", serif: false, mono: true },
];

const SPRINGS = [
  { name: "Soft", cfg: spring.soft, note: "stiffness 120 · damping 20" },
  { name: "Snappy", cfg: spring.snappy, note: "stiffness 400 · damping 28" },
  { name: "Gentle", cfg: spring.gentle, note: "stiffness 90 · damping 18" },
];

const TOKENS = `:root {
  --name:    "Clayton Young";
  --role:    "Design Engineer, Web";
  --origin:  "the trades" → self-taught;
  --shipped: 2 products, 1 paying customer;
  --stack:   React, Next.js, TypeScript;
  --status:  available;                /* open to relocate anywhere */
}`;

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
          <div className="eyebrow" style={{ marginBottom: 22 }}>04 · Living design system</div>
          <h1 style={{ fontSize: "clamp(40px, 6.4vw, 66px)", lineHeight: 1.03 }}>
            My résumé, <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>as a system.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 26, maxWidth: 600 }}>
            This whole site runs on one small set of tokens, type, and motion. Here it is, taken apart — the way I&apos;d
            document a system for a team to build on.
          </p>
        </motion.div>
      </section>

      {/* color */}
      <Section eyebrow="Color">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16 }}>
          {SWATCHES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div>
                <div style={{ height: 84, borderRadius: "var(--r-md)", background: s.hex, border: "1px solid var(--border-strong)" }} />
                <div style={{ marginTop: 10, fontSize: 14, fontWeight: 500 }}>{s.name}</div>
                <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)" }}>{s.hex}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* type */}
      <Section eyebrow="Type">
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {TYPE.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ display: "grid", gridTemplateColumns: "170px 1fr", gap: 24, alignItems: "baseline", borderTop: "1px solid var(--border)", paddingTop: 20 }}>
                <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.5 }}>{t.label}</div>
                <div
                  style={{
                    fontFamily: t.mono ? "var(--font-mono)" : t.serif ? "var(--font-serif)" : "var(--font-sans)",
                    fontSize: t.size,
                    lineHeight: 1.2,
                    color: t.mono ? "var(--accent-deep)" : "var(--text)",
                    letterSpacing: t.serif ? "-0.015em" : "0",
                  }}
                >
                  {t.text}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* components */}
      <Section eyebrow="Components">
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center", padding: "22px 24px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)" }}>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} transition={spring.snappy} style={{ background: "var(--accent)", color: "#fff", fontSize: 14.5, fontWeight: 600, padding: "12px 20px", borderRadius: "var(--r-pill)" }}>
              Primary
            </motion.button>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} transition={spring.snappy} style={{ background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border-strong)", fontSize: 14.5, fontWeight: 600, padding: "12px 20px", borderRadius: "var(--r-pill)" }}>
              Ghost
            </motion.button>
            <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-faint)", background: "var(--surface-2)", border: "1px solid var(--border)", padding: "5px 12px", borderRadius: "var(--r-pill)" }}>
              Tag
            </span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--surface-2)", border: "1px solid var(--border)", padding: "8px 14px 8px 10px", borderRadius: "var(--r-pill)" }}>
              <Mark size={16} /> <span style={{ fontSize: 14, fontWeight: 500 }}>Avatar chip</span>
            </div>
            <span className="mono" style={{ fontSize: 12.5, background: "var(--surface-3)", border: "1px solid var(--border)", borderRadius: 6, padding: "3px 8px" }}>inline code</span>
          </div>
        </Reveal>
      </Section>

      {/* motion */}
      <Section eyebrow="Motion — hover a tile">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {SPRINGS.map((s) => (
            <MotionTile key={s.name} name={s.name} cfg={s.cfg} note={s.note} />
          ))}
        </div>
      </Section>

      {/* résumé as tokens */}
      <Section eyebrow="…and the résumé is just data">
        <Reveal>
          <pre style={{ margin: 0, background: "var(--bg-deep)", border: "1px solid var(--border-strong)", borderRadius: "var(--r-lg)", padding: "22px 24px", overflowX: "auto" }}>
            <code className="mono" style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--text)" }}>{TOKENS}</code>
          </pre>
        </Reveal>
      </Section>

      {/* closing */}
      <section className="wrap" style={{ paddingTop: 56, paddingBottom: 92 }}>
        <Reveal>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 36, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 480 }}>
              A system is only worth it if a team can build on it. That&apos;s the job.
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

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 8 }}>
      <Reveal><div className="eyebrow" style={{ marginBottom: 26 }}>{eyebrow}</div></Reveal>
      {children}
    </section>
  );
}

function MotionTile({ name, cfg, note }: { name: string; cfg: object; note: string }) {
  const [on, setOn] = useState(false);
  return (
    <motion.button
      onHoverStart={() => setOn(true)}
      onHoverEnd={() => setOn(false)}
      onTapStart={() => setOn((v) => !v)}
      style={{
        textAlign: "left",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div style={{ height: 44, display: "flex", alignItems: "center" }}>
        <motion.span
          animate={{ x: on ? "calc(100% - 22px)" : 0, backgroundColor: on ? "var(--accent-deep)" : "var(--accent)" }}
          transition={cfg}
          style={{ width: 22, height: 22, borderRadius: 999, background: "var(--accent)", display: "block" }}
        />
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{name}</div>
        <div className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", marginTop: 3 }}>{note}</div>
      </div>
    </motion.button>
  );
}
