import type { CSSProperties } from "react";

export const C = {
  paper: "#E9EBE6",
  ink: "#17191B",
  mute: "#5C6066",
  line: "#CDD0CA",
  card: "#FBFCF9",
  dark: "#14181C",
  darkSurface: "#1B2026",
  lightOnDark: "#E8EAE6",
  muteOnDark: "#9AA0A2",
  accent: "#1E45C7",
  accentHover: "#16349E",
} as const;

export const sans = "'Hanken Grotesk', system-ui, -apple-system, Segoe UI, sans-serif";
export const mono = sans;

export const display = (size: number | string): CSSProperties => ({
  fontFamily: sans,
  fontWeight: 700,
  lineHeight: 1.07,
  letterSpacing: "-0.025em",
  fontSize: size,
});
