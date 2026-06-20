// ─── Edit all page copy and data here ─────────────────────────────────────────

export const META = {
  name: "Shawn Lim",
  subtitle: "AI transformation\nadvisory",
  linkedin: "https://linkedin.com/in/geekyme",
  price: "$3,000",
  engagementLength: "3-hour advisory engagement",
};

export const HERO = {
  eyebrow: "Advisory for CXOs and engineering leaders",
  headline: ["AI strategy dies in the gap between the boardroom and the", "real work", "."],
  subtext:
    "I work in that gap. I advise leadership and engineering teams together, so the strategy that gets approved is the same one that survives the build, the regulator, and real users.",
  boardQuestion: "\"Where does AI actually move the P&L, and what's the risk?\"",
  engQuestion: "\"What do we build, and what does it cost to run safely?\"",
  bridgeText: "→ Same problem. I make the answer one decision, not two.",
  cta: "See engagement terms",
};

export const WHO_CARDS = [
  {
    tagVariant: "exec" as const,
    tag: "For CXOs",
    heading: "You need AI to move the numbers, not the narrative.",
    body: "You're being asked where AI creates real leverage, what to fund, how to govern it, and how to tell if it's working. I help you separate signal from theatre and commit budget with conviction.",
  },
  {
    tagVariant: "eng" as const,
    tag: "For engineering leaders",
    heading: "You need to build it without betting the platform.",
    body: "Agents, retrieval, evaluation, human-in-the-loop, the unglamorous infrastructure underneath. I help you shape an architecture that's safe to ship and cheap enough to keep running.",
  },
];

export const HOW_LEVELS = [
  {
    coord: "01 / board",
    heading: "Strategy and operating model",
    body: "Where AI creates leverage in your business, how to structure the org around it, what to budget, and the governance to stay defensible in a regulated market.",
  },
  {
    coord: "02 / architecture",
    heading: "Platform and systems design",
    body: "The technical foundation: agent infrastructure, retrieval pipelines, evaluation frameworks, human-in-the-loop controls, and the platform calls that decide whether this scales or stalls.",
  },
  {
    coord: "03 / delivery",
    heading: "Adoption and impact",
    body: "How to get real people to actually use it. I advise on rollout across the org, replacing manual work, measuring the productivity gain, and making the change stick once I step back.",
  },
];

export const STATS = [
  { n: "0–100+", d: "Engineers built and led across fintech, travel, insurance, and consumer tech." },
  { n: "450+", d: "Staff onboarded to an enterprise AI platform I founded at a regulated fintech." },
  { n: "25–50%", d: "Company-wide productivity gains, with a material lift in unit economics." },
  { n: "5", d: "Southeast Asian jurisdictions covered by an AI governance framework I authored." },
];

export const DOMAINS = [
  "SME lending & financing",
  "Payments",
  "Banking",
  "Insurance",
  "Online travel & lifestyle",
  "Food delivery",
  "Consumer marketplace",
  "Customer experience software",
  "Early-stage startups",
];

export const REGULATORY_NOTE =
  "Much of this sits inside regulated financial services: banking, insurance, and licensed fintech operating across five Southeast Asian jurisdictions. I work fluently with compliance constraints, audit and oversight requirements, and the governance it takes to put AI into production without tripping a regulator.";

export const WHAT_YOU_GET = [
  "Working sessions with your leadership or engineering team, focused on a real decision you're facing now.",
  "A written readout: clear recommendations, the trade-offs, and a path you can act on without me in the room.",
  "Architecture and platform review for when the conversation goes technical.",
  "Async follow-up between sessions so momentum doesn't stall.",
];
