import { useState } from "react";
import { C, sans, mono, display, wrap } from "../tokens";
import { META } from "../content";
import { Eyebrow } from "../ui/Eyebrow";

export function Contact({ m }: { m: boolean }) {
  const [hover, setHover] = useState(false);

  return (
    <section style={{ padding: m ? "60px 0 64px" : "96px 0 104px", textAlign: "center" }}>
      <div style={wrap(m)}>
        <Eyebrow mb={16}>Get in touch</Eyebrow>
        <h2 style={{ ...display(m ? 36 : 56), maxWidth: "16ch", margin: "0 auto 30px" }}>
          Tell me the decision you're stuck on.
        </h2>

        <a
          href={META.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ fontFamily: sans, fontWeight: 600, fontSize: 16, textDecoration: "none", padding: "15px 28px", borderRadius: 5, background: hover ? C.accentHover : C.accent, color: "#fff", transition: "background .18s ease", display: "inline-block" }}
        >
          Connect on LinkedIn
        </a>

        <div style={{ fontFamily: mono, fontSize: 12, color: C.mute, marginTop: 34, letterSpacing: "0.04em" }}>
          {META.price} {META.engagementLength} &middot; build work quoted separately
        </div>
      </div>
    </section>
  );
}
