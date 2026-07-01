"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { container, item, spring, LINKS } from "@/lib/ui";
import { TopBar } from "@/components/Nav";

type Lens = { n: string; title: string; blurb: string; tag: string; href: string };

const LENSES: Lens[] = [
  {
    n: "01",
    title: "Talk to my résumé",
    blurb: "Ask an AI about my work and watch it answer, in real time, with the receipts.",
    tag: "Live conversation",
    href: "/talk",
  },
  {
    n: "02",
    title: "Anthropic-brand interactive page",
    blurb: "My story, told in a page crafted to feel like it could live on anthropic.com.",
    tag: "Brand · motion",
    href: "/brand",
  },
  {
    n: "03",
    title: "Data-viz résumé",
    blurb: "My career as an interactive visualization — a timeline, a skills field, the numbers.",
    tag: "Data visualization",
    href: "/data",
  },
  {
    n: "04",
    title: "Living design system",
    blurb: "My résumé rebuilt as a design system you can actually poke at — tokens, type, motion.",
    tag: "Design systems",
    href: "/system",
  },
];

export default function Home() {
  return (
    <main>
      <TopBar />

      <div className="wrap" style={{ paddingTop: 78, paddingBottom: 80 }}>
        {/* hero */}
        <motion.div initial="hidden" animate="show" variants={container} style={{ maxWidth: 720 }}>
          <motion.div variants={item} className="eyebrow" style={{ marginBottom: 20 }}>
            Design Engineer, Web · Creative Studio
          </motion.div>
          <motion.h1 variants={item} style={{ fontSize: "clamp(38px, 6vw, 62px)", lineHeight: 1.03 }}>
            Hi — I&apos;m Clayton.
            <br />I design and build{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>the whole thing.</span>
          </motion.h1>
          <motion.p
            variants={item}
            style={{ fontSize: 19, lineHeight: 1.62, color: "var(--text-muted)", marginTop: 26, maxWidth: 620 }}
          >
            This is my application for <b style={{ color: "var(--text)", fontWeight: 600 }}>Design Engineer, Web</b>.
            The role is about craft, motion, and making things by hand — so a static PDF felt wrong. Instead, here&apos;s
            my résumé built <span style={{ fontStyle: "italic" }}>four different ways</span>. Pick a lens.
          </motion.p>
        </motion.div>

        {/* the four lenses */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="lens-grid"
          style={{ marginTop: 60 }}
        >
          {LENSES.map((l) => (
            <motion.div key={l.href} variants={item}>
              <Card lens={l} />
            </motion.div>
          ))}
        </motion.div>

        {/* footer */}
        <div
          style={{
            marginTop: 72,
            paddingTop: 26,
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 14,
            color: "var(--text-muted)",
          }}
        >
          <span>
            Built from scratch — React · Next.js · TypeScript · Framer Motion.{" "}
            <a href={`${LINKS.github}/Anthropic`} target="_blank" rel="noreferrer" style={{ color: "var(--text)", fontWeight: 600, borderBottom: "1px solid var(--border-strong)" }}>
              Source ↗
            </a>
          </span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href={LINKS.sip} target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)" }}>Sip ↗</a>
            <a href={LINKS.firecode} target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)" }}>FireCode AI ↗</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)" }}>GitHub ↗</a>
          </span>
        </div>
      </div>
    </main>
  );
}

function Card({ lens }: { lens: Lens }) {
  return (
    <Link href={lens.href} style={{ display: "block", height: "100%" }}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={spring.snappy}
        style={{
          height: "100%",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-lg)",
          padding: "26px 26px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          boxShadow: "var(--shadow-soft)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span className="mono" style={{ fontSize: 13, color: "var(--accent-deep)", fontWeight: 500 }}>
            {lens.n}
          </span>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
            }}
          >
            {lens.tag}
          </span>
        </div>
        <h2 style={{ fontSize: 25, marginTop: 4 }}>{lens.title}</h2>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-muted)", flex: 1 }}>{lens.blurb}</p>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-deep)", display: "inline-flex", alignItems: "center", gap: 6 }}>
          Open <span aria-hidden>→</span>
        </span>
      </motion.article>
    </Link>
  );
}
