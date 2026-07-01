"use client";

import { motion } from "framer-motion";
import { BackLink } from "./Nav";
import { spring } from "@/lib/ui";

export function Stub({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <main className="wrap" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, paddingTop: 40, paddingBottom: 40 }}>
      <div style={{ position: "absolute", top: 26 }}>
        <BackLink />
      </div>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={spring.soft} style={{ maxWidth: 620 }}>
        <div className="mono" style={{ color: "var(--accent-deep)", fontSize: 13, marginBottom: 14 }}>{n}</div>
        <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)" }}>{title}</h1>
        <p style={{ fontSize: 18, color: "var(--text-muted)", marginTop: 20, lineHeight: 1.6 }}>{note}</p>
        <div style={{ marginTop: 26, display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14, color: "var(--text-faint)" }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--accent)", display: "inline-block" }} />
          This lens is being crafted.
        </div>
      </motion.div>
    </main>
  );
}
