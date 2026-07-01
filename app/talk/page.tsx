"use client";

import { useCallback, useEffect, useRef } from "react";
import { useChat } from "@/lib/useChat";
import { Message } from "@/components/chat/Message";
import { Composer } from "@/components/chat/Composer";
import { BackLink, Wordmark } from "@/components/Nav";

export default function Page() {
  const { messages, busy, send, completeStream } = useChat();
  const scroller = useRef<HTMLDivElement>(null);
  const pinned = useRef(true);

  const nearBottom = () => {
    const el = scroller.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 130;
  };
  const scrollDown = () => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  };
  const onScroll = () => {
    pinned.current = nearBottom();
  };
  const tick = useCallback(() => {
    if (pinned.current) scrollDown();
  }, []);

  useEffect(() => {
    pinned.current = true;
    scrollDown();
  }, [messages.length]);

  const handleSend = useCallback(
    (t: string, key?: string) => {
      pinned.current = true;
      send(t, key);
    },
    [send],
  );

  const onlyWelcome = messages.length === 1;

  return (
    <main style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <BackLink />
          <Wordmark />
        </div>
      </div>

      <div ref={scroller} onScroll={onScroll} style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 28px 26px" }}>
          <div style={{ marginBottom: 22 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>01 · Talk to my résumé</div>
            <h1 style={{ fontSize: 28 }}>Ask me anything.</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {messages.map((m) => (
              <Message key={m.id} message={m} onComplete={() => completeStream(m.id)} onTick={tick} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "0 28px 18px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
          <Composer onSend={handleSend} busy={busy} showSuggestions={onlyWelcome} />
        </div>
      </div>
    </main>
  );
}
