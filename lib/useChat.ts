"use client";

import { useCallback, useRef, useState } from "react";
import { replyFor, WELCOME, type Message } from "./chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: WELCOME }]);
  const [busy, setBusy] = useState(false);
  const idRef = useRef(1);
  const next = () => idRef.current++;

  const send = useCallback(
    (raw: string, key?: string) => {
      const text = raw.trim();
      if (!text || busy) return;
      setBusy(true);
      const userId = next();
      const botId = next();
      setMessages((m) => [
        ...m,
        { id: userId, role: "user", text },
        { id: botId, role: "assistant", text: replyFor(key, text), thinking: true, streaming: true },
      ]);
      window.setTimeout(() => {
        setMessages((m) => m.map((msg) => (msg.id === botId ? { ...msg, thinking: false } : msg)));
      }, 550);
    },
    [busy],
  );

  const completeStream = useCallback((id: number) => {
    setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, streaming: false } : msg)));
    setBusy(false);
  }, []);

  return { messages, busy, send, completeStream };
}
