// Shared motion tokens + tiny helpers.
import type { Transition } from "framer-motion";

export const spring = {
  soft: { type: "spring", stiffness: 120, damping: 20 } as Transition,
  snappy: { type: "spring", stiffness: 400, damping: 28 } as Transition,
  gentle: { type: "spring", stiffness: 90, damping: 18 } as Transition,
};

export const ease = { out: [0.22, 1, 0.36, 1] as [number, number, number, number] };

// staggered reveal container/child
export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};
export const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: spring.soft },
};

// shared résumé facts, used across the four lenses
export const LINKS = {
  github: "https://github.com/Youngs-World",
  sip: "https://apps.apple.com/us/app/sip-drinks-abroad/id6781859543",
  firecode: "https://firecodeai.com/",
  relay: "https://xai-resume.pages.dev",
  marketpulse: "https://polymarket-resume.pages.dev",
  email: "claytonryanyoung@gmail.com",
};
