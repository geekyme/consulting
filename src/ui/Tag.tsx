import type { CSSProperties, ReactNode } from "react";
import { C, mono } from "../tokens";

export type TagVariant = "exec" | "eng";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  onDark?: boolean;
}

const base: CSSProperties = {
  fontFamily: mono,
  fontSize: 10.5,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  padding: "4px 9px",
  borderRadius: 3,
  display: "inline-block",
  lineHeight: 1.4,
  whiteSpace: "nowrap",
};

export function Tag({ children, variant = "exec", onDark = false }: TagProps) {
  if (variant === "exec") {
    return (
      <span style={{ ...base, background: onDark ? C.lightOnDark : C.ink, color: onDark ? C.dark : "#fff" }}>
        {children}
      </span>
    );
  }
  return (
    <span style={{ ...base, background: "transparent", color: C.accent, border: "1px solid " + C.accent }}>
      {children}
    </span>
  );
}
