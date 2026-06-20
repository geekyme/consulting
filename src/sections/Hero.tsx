import { useState } from "react";
import { C, sans, mono, display, wrap } from "../tokens";
import { HERO, META } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Hero({ m }: { m: boolean }) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header style={{ position: "relative", borderBottom: "1px solid " + C.line }}>
      <div style={{ ...wrap(m), paddingTop: m ? 26 : 34, paddingBottom: m ? 50 : 80 }}>

        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: m ? 40 : 64, gap: 12 }}>
          <span style={{ fontFamily: sans, fontWeight: 700, fontSize: m ? 24 : 28, letterSpacing: "-0.025em" }}>
            {META.name}
          </span>
          <span style={{ fontFamily: mono, fontSize: 11, color: C.mute, letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "right" }}>
            {META.subtitle.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </span>
        </div>

        <Eyebrow mb={m ? 18 : 22}>{HERO.eyebrow}</Eyebrow>
        <h1 style={{ ...display(m ? 44 : "clamp(54px, 7vw, 88px)"), maxWidth: "15ch", margin: 0 }}>
          {HERO.headline[0]}{" "}
          <span style={{ color: C.accent }}>{HERO.headline[1]}</span>
          {HERO.headline[2]}
        </h1>
        <p style={{ fontSize: m ? 19 : 23, color: C.mute, maxWidth: "50ch", marginTop: m ? 22 : 28, lineHeight: 1.5 }}>
          {HERO.subtext}
        </p>

        {/* Dual-register device */}
        <div style={{ marginTop: m ? 34 : 44, border: "1px solid " + C.line, borderRadius: 8, background: C.card, padding: m ? "20px 18px" : "26px 28px", maxWidth: 640 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 14 }}>
            <Tag variant="exec">Board</Tag>
            <span style={{ fontSize: m ? 15 : 16.5 }}>{HERO.boardQuestion}</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 16 }}>
            <Tag variant="eng">Eng</Tag>
            <span style={{ fontSize: m ? 15 : 16.5 }}>{HERO.engQuestion}</span>
          </div>
          <div style={{ borderTop: "1px solid " + C.line, paddingTop: 14, fontFamily: mono, fontSize: m ? 12 : 12.5, color: C.mute, letterSpacing: "0.02em" }}>
            {HERO.bridgeText}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: m ? 32 : 40, display: "flex", flexDirection: m ? "column" : "row", alignItems: m ? "stretch" : "center", gap: m ? 16 : 24 }}>
          <a
            href="#engage"
            onMouseEnter={() => setHover("cta")}
            onMouseLeave={() => setHover(null)}
            style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, background: hover === "cta" ? C.accentHover : C.accent, color: "#fff", textDecoration: "none", padding: "15px 28px", borderRadius: 5, textAlign: "center", transition: "background .18s ease" }}
          >
            {HERO.cta}
          </a>
          <span style={{ fontFamily: mono, fontSize: 13, color: C.mute }}>
            <b style={{ color: C.ink, fontWeight: 500 }}>{META.price}</b> &middot; {META.engagementLength}
          </span>
        </div>

      </div>
    </header>
  );
}
