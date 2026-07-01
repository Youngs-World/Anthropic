"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Markdown } from "./Markdown";

export function StreamingText({
  text,
  onComplete,
  onTick,
  cps = 240,
}: {
  text: string;
  onComplete: () => void;
  onTick?: () => void;
  cps?: number;
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const done = useRef(false);
  const cb = useRef({ onComplete, onTick });
  cb.current = { onComplete, onTick };

  useEffect(() => {
    if (reduce) {
      setShown(text.length);
      if (!done.current) {
        done.current = true;
        cb.current.onComplete();
      }
      return;
    }
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const n = Math.min(text.length, Math.floor(((t - start) / 1000) * cps));
      setShown(n);
      cb.current.onTick?.();
      if (n < text.length) raf = requestAnimationFrame(step);
      else if (!done.current) {
        done.current = true;
        cb.current.onComplete();
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reduce, cps]);

  return <Markdown text={text.slice(0, shown)} cursor={shown < text.length} />;
}
