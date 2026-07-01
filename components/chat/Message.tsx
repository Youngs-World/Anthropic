"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/ui";
import { Mark } from "@/components/Nav";
import { Markdown } from "./Markdown";
import { StreamingText } from "./StreamingText";
import type { Message as Msg } from "@/lib/chat";

function Avatar() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 32,
        height: 32,
        borderRadius: 9,
        background: "var(--surface)",
        border: "1px solid var(--border-strong)",
        display: "grid",
        placeItems: "center",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <Mark size={16} />
    </div>
  );
}

function Thinking() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "10px 0" }} aria-label="Thinking">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          style={{ width: 7, height: 7, borderRadius: "var(--r-pill)", background: "var(--accent)" }}
        />
      ))}
    </div>
  );
}

export function Message({ message, onComplete, onTick }: { message: Msg; onComplete: () => void; onTick?: () => void }) {
  const reduce = useReducedMotion();
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring.soft}
      style={{ display: "flex", alignItems: "flex-start", justifyContent: isUser ? "flex-end" : "flex-start", gap: 13 }}
    >
      {!isUser && <Avatar />}
      <div style={{ maxWidth: isUser ? "80%" : "100%", minWidth: 0 }}>
        {isUser ? (
          <div
            style={{
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-line)",
              borderRadius: "16px 16px 4px 16px",
              padding: "10px 15px",
              fontSize: 15.5,
              lineHeight: 1.55,
              color: "var(--text)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {message.text}
          </div>
        ) : message.thinking ? (
          <Thinking />
        ) : message.streaming ? (
          <StreamingText text={message.text} onComplete={onComplete} onTick={onTick} />
        ) : (
          <Markdown text={message.text} />
        )}
      </div>
    </motion.div>
  );
}
