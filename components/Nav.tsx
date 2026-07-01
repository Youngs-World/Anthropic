"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/** Small clay mark — a hand-drawn-ish asterisk/spark, nods to Anthropic's warmth. */
export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5c.9 3.2 1.6 5 3.3 6.7C17 10.9 18.8 11.6 22 12.5c-3.2.9-5 1.6-6.7 3.3-1.7 1.7-2.4 3.5-3.3 6.7-.9-3.2-1.6-5-3.3-6.7C7 14.1 5.2 13.4 2 12.5c3.2-.9 5-1.6 6.7-3.3C10.4 7.5 11.1 5.7 12 2.5Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9 }} aria-label="Clayton Young — home">
      <Mark size={20} />
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>
        Clayton Young
      </span>
    </Link>
  );
}

export function TopBar() {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
        <Wordmark />
        <a
          href="mailto:claytonryanyoung@gmail.com"
          style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-muted)" }}
        >
          claytonryanyoung@gmail.com
        </a>
      </div>
    </div>
  );
}

/** Back-to-index pill for subpages. */
export function BackLink() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontSize: 13.5,
          fontWeight: 500,
          color: "var(--text-muted)",
          padding: "7px 14px 7px 11px",
          borderRadius: "var(--r-pill)",
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <span style={{ fontSize: 15 }}>←</span> All four lenses
      </Link>
    </motion.div>
  );
}
