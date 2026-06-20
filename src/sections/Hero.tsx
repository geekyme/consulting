import { useState } from "react";
import { C, sans, mono, display } from "../tokens";
import { HERO, META } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <header style={{ position: "relative", borderBottom: "1px solid " + C.line }}>
      <div className="wrap" style={{ paddingTop: "var(--hero-pt)", paddingBottom: "var(--hero-pb)" }}>

        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--hero-nav-pb)", gap: 12 }}>
          <span style={{ fontFamily: sans, fontWeight: 700, fontSize: "var(--hero-name-f)", letterSpacing: "-0.025em" }}>
            {META.name}
          </span>
          <span style={{ fontFamily: mono, fontSize: 11, color: C.mute, letterSpacing: "0.14em", textTransform: "uppercase", textAlign: "right" }}>
            {META.subtitle.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </span>
        </div>

        <Eyebrow mb={22}>{HERO.eyebrow}</Eyebrow>
        <h1 style={{ ...display("var(--hero-h1-f)"), maxWidth: "15ch", margin: 0 }}>
          {HERO.headline[0]}{" "}
          <span style={{ color: C.accent }}>{HERO.headline[1]}</span>
          {HERO.headline[2]}
        </h1>
        <p style={{ fontSize: "var(--hero-sub-f)", color: C.mute, maxWidth: "50ch", marginTop: "var(--hero-sub-mt)", lineHeight: 1.5 }}>
          {HERO.subtext}
        </p>

        {/* Dual-register device */}
        <div style={{ marginTop: "var(--device-mt)", border: "1px solid " + C.line, borderRadius: 8, background: C.card, padding: "var(--device-pad)", maxWidth: 640 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 14 }}>
            <Tag variant="exec">Board</Tag>
            <span style={{ fontSize: "var(--device-q-f)" }}>{HERO.boardQuestion}</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 16 }}>
            <Tag variant="eng">Eng</Tag>
            <span style={{ fontSize: "var(--device-q-f)" }}>{HERO.engQuestion}</span>
          </div>
          <div style={{ borderTop: "1px solid " + C.line, paddingTop: 14, fontFamily: mono, fontSize: "var(--device-ft-f)", color: C.mute, letterSpacing: "0.02em" }}>
            {HERO.bridgeText}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-row">
          <a
            href="#engage"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, background: hover ? C.accentHover : C.accent, color: "#fff", textDecoration: "none", padding: "15px 28px", borderRadius: 5, textAlign: "center", transition: "background .18s ease" }}
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
