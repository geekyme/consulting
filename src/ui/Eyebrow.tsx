import type { ReactNode } from "react";
import { C, mono } from "../tokens";

interface EyebrowProps {
  children: ReactNode;
  onDark?: boolean;
  mb?: number;
}

export function Eyebrow({ children, onDark = false, mb = 0 }: EyebrowProps) {
  return (
    <div style={{
      fontFamily: mono,
      fontSize: 12,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: onDark ? C.muteOnDark : C.mute,
      fontWeight: 500,
      marginBottom: mb,
    }}>
      {children}
    </div>
  );
}
