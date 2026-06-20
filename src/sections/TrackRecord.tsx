import { C, mono, display } from "../tokens";
import { STATS, DOMAINS, REGULATORY_NOTE } from "../content";
import { Eyebrow } from "../ui/Eyebrow";

export function TrackRecord() {
  return (
    <section style={{ padding: "var(--sec-y)" }}>
      <div className="wrap">
        <Eyebrow mb={16}>Track record</Eyebrow>
        <h2 style={{ ...display("var(--h2-f)"), maxWidth: "18ch" }}>Fourteen years building, not just advising.</h2>

        <div className="grid-stats">
          {STATS.map((s) => (
            <div key={s.n} style={{ borderTop: "2px solid " + C.ink, paddingTop: 14 }}>
              <div style={{ ...display("var(--tr-n-f)"), color: C.accent }}>{s.n}</div>
              <div style={{ color: C.mute, fontSize: "var(--tr-d-f)", marginTop: 6, lineHeight: 1.45 }}>{s.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--tr-dom-mt)", borderTop: "1px solid " + C.line, paddingTop: 26 }}>
          <Eyebrow mb={16}>Domains across 14 years</Eyebrow>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {DOMAINS.map((d) => (
              <span key={d} style={{ fontFamily: mono, fontSize: "var(--tr-dom-f)", color: C.ink, border: "1px solid " + C.line, background: C.card, borderRadius: 999, padding: "7px 14px" }}>{d}</span>
            ))}
          </div>
        </div>

        <div className="grid-regulatory">
          <Eyebrow>Regulatory</Eyebrow>
          <p style={{ color: C.mute, fontSize: "var(--tr-reg-p-f)", maxWidth: "64ch", margin: 0 }}>
            {REGULATORY_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
