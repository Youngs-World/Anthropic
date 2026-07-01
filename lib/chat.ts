// Canned résumé Q&A — streamed client-side, no API, fully offline.

export type Role = "user" | "assistant";
export type Message = { id: number; role: Role; text: string; streaming?: boolean; thinking?: boolean };
export type Suggestion = { key: string; label: string };

export const SUGGESTIONS: Suggestion[] = [
  { key: "fit", label: "Why is Clayton a fit for this role?" },
  { key: "shipped", label: "What has he shipped?" },
  { key: "stack", label: "What's his stack?" },
  { key: "story", label: "How'd he get here?" },
];

export const WELCOME =
  "Hi — I'm a small assistant that knows **Clayton's work**. Ask me anything about his experience for the **Design Engineer, Web** role, or tap a question below.\n\n*(Everything here is canned and streamed client-side — no API, fully offline. If you'd like this running on the real Claude API, he'll wire it up in an afternoon.)*";

const REPLIES: Record<string, string> = {
  fit: `A few reasons this role fits unusually well:

- **He designs and builds** — end to end, solo. Design system, front-end, back-end, deploy. That's the whole "design engineer" premise.
- **Craft is the point.** He obsesses over typography, motion, and the details most people never notice — the exact things this JD asks for.
- **He builds with Claude.** FireCode AI has a live, Claude-powered assistant in production — so "AI-powered creative tooling" isn't aspirational for him.
- **This whole site is the proof.** Next.js + TypeScript + Framer Motion, built four different ways, in Anthropic's brand — including a data-viz view and a living design system.

The honest caveat: he's early-career and self-taught. But for a craft-first role, the work in front of you is the argument.`,

  shipped: `Two real products, shipped solo:

- **Sip: Drinks Abroad** — a premium, **fully-offline** iOS app on the U.S. App Store (React · Vite · Capacitor), with a hand-built design system and a custom i18n engine across 15 countries.
- **FireCode AI** — a full-stack SaaS platform with a **live Claude-powered assistant**, Postgres + row-level-security auth, and a **paying customer**.

Plus interactive résumé sites like this one — a prediction-market UI, a real-time chat, and the four lenses you're looking at now. He'd rather show than tell.`,

  stack: `Front of the stack: **TypeScript, React, Next.js (App Router), modern CSS, Framer Motion**, and design systems built from tokens up.

Back of it: **Supabase / PostgreSQL** (with row-level security + JWT), **Cloudflare Pages / Workers**, REST APIs.

And AI: **hands-on LLM integration** — streaming UIs, prompt design, in-product assistants (built on Claude).

Cross-cutting: performance (transform-based animation, lean bundles), accessibility (reduced-motion, focus states), and internationalization.`,

  story: `The short version: he came up **the hard way.**

Six years in low-voltage electronic security and life-safety systems — reliability-critical work where a small mistake has real consequences. That trained an obsessive eye for detail and edge cases.

He taught himself to code because he *couldn't not build things*, and started shipping real products end to end. The security background is why he sweats the details on screen the way he used to sweat them in the field.`,

  default: `I know Clayton's background pretty well — his shipped products (Sip, FireCode AI), his stack, why he fits this role, and how he got here. Try one of the suggested questions, and I'll stream you the answer.`,
};

function pick(input: string): string {
  const t = input.toLowerCase();
  if (REPLIES[t]) return REPLIES[t];
  if (/(fit|why|hire|role|good)/.test(t)) return REPLIES.fit;
  if (/(ship|built|made|product|work|project)/.test(t)) return REPLIES.shipped;
  if (/(stack|tech|tool|framework|language|skill)/.test(t)) return REPLIES.stack;
  if (/(story|how|background|start|came|history)/.test(t)) return REPLIES.story;
  return REPLIES.default;
}

export function replyFor(key: string | undefined, text: string): string {
  if (key && REPLIES[key]) return REPLIES[key];
  return pick(text);
}
