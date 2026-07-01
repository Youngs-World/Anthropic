"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { spring } from "@/lib/ui";
import { SUGGESTIONS } from "@/lib/chat";

export function Composer({
  onSend,
  busy,
  showSuggestions,
}: {
  onSend: (text: string, key?: string) => void;
  busy: boolean;
  showSuggestions: boolean;
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const grow = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 150) + "px";
  };
  const submit = () => {
    const t = value.trim();
    if (!t || busy) return;
    onSend(t);
    setValue("");
    requestAnimationFrame(() => {
      if (ref.current) ref.current.style.height = "auto";
    });
  };
  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };
  const disabled = busy || !value.trim();

  return (
    <div>
      {showSuggestions && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 13 }}>
          {SUGGESTIONS.map((s) => (
            <motion.button
              key={s.key}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={spring.snappy}
              onClick={() => !busy && onSend(s.label, s.key)}
              style={{
                fontSize: 13.5,
                color: "var(--text-muted)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "8px 14px",
                borderRadius: "var(--r-pill)",
              }}
            >
              {s.label}
            </motion.button>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          background: "var(--surface)",
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--r-lg)",
          padding: "11px 11px 11px 17px",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <textarea
          ref={ref}
          value={value}
          rows={1}
          onChange={(e) => {
            setValue(e.target.value);
            grow();
          }}
          onKeyDown={onKey}
          placeholder="Ask about Clayton's work…"
          style={{
            flex: 1,
            resize: "none",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "var(--text)",
            fontSize: 15.5,
            lineHeight: 1.5,
            maxHeight: 150,
            padding: "6px 0",
          }}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={spring.snappy}
          onClick={submit}
          disabled={disabled}
          aria-label="Send"
          style={{
            flexShrink: 0,
            width: 38,
            height: 38,
            borderRadius: "var(--r-md)",
            display: "grid",
            placeItems: "center",
            color: "#fff",
            background: disabled ? "var(--border-strong)" : "var(--accent)",
            opacity: disabled ? 0.6 : 1,
            transition: "background .2s, opacity .2s",
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-faint)", marginTop: 9 }}>
        Canned &amp; streamed client-side — fully offline.
      </div>
    </div>
  );
}
