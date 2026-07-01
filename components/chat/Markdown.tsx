"use client";

import { Fragment, type ReactNode } from "react";

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

function parse(src: string): Block[] {
  const lines = src.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) items.push(lines[i++].trim().slice(2));
      blocks.push({ type: "ul", items });
      continue;
    }
    if (line.trim() === "") {
      i++;
      continue;
    }
    const para = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("- ")) para.push(lines[i++]);
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((p, idx) => {
    if (/^\*\*[^*]+\*\*$/.test(p)) return <strong key={idx} style={{ fontWeight: 600, color: "var(--text)" }}>{p.slice(2, -2)}</strong>;
    if (/^\*[^*]+\*$/.test(p)) return <em key={idx} style={{ color: "var(--text-muted)" }}>{p.slice(1, -1)}</em>;
    if (/^`[^`]+`$/.test(p))
      return (
        <code key={idx} style={{ fontFamily: "var(--font-mono)", fontSize: "0.86em", background: "var(--surface-3)", border: "1px solid var(--border)", borderRadius: 5, padding: "1px 5px" }}>
          {p.slice(1, -1)}
        </code>
      );
    return <Fragment key={idx}>{p}</Fragment>;
  });
}

const Cursor = () => (
  <span
    style={{
      display: "inline-block",
      width: 8,
      height: "1.05em",
      marginLeft: 2,
      verticalAlign: "-0.15em",
      borderRadius: 2,
      background: "var(--accent)",
      animation: "mdblink 1s steps(1) infinite",
    }}
  />
);

export function Markdown({ text, cursor = false }: { text: string; cursor?: boolean }) {
  const blocks = parse(text);
  const last = blocks.length - 1;
  return (
    <div style={{ fontSize: 15.5, lineHeight: 1.62, color: "var(--text)" }}>
      <style>{`@keyframes mdblink{0%,55%{opacity:1}56%,100%{opacity:0}}`}</style>
      {blocks.map((b, i) => {
        const here = cursor && i === last;
        if (b.type === "ul")
          return (
            <ul key={i} style={{ margin: "8px 0", paddingLeft: 20 }}>
              {b.items.map((it, j) => (
                <li key={j} style={{ marginBottom: 5 }}>
                  {inline(it)}
                  {here && j === b.items.length - 1 && <Cursor />}
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} style={{ margin: "0 0 11px" }}>
            {inline(b.text)}
            {here && <Cursor />}
          </p>
        );
      })}
      {cursor && blocks.length === 0 && <Cursor />}
    </div>
  );
}
