import { C, mono, display, wrap, secPad } from "../tokens";
import { STATS, DOMAINS, REGULATORY_NOTE } from "../content";
import { Eyebrow } from "../ui/Eyebrow";

export function TrackRecord({ m }: { m: boolean }) {
  return (
    <section style={{ padding: secPad(m) }}>
      <div style={wrap(m)}>
        <Eyebrow mb={16}>Track record</Eyebrow>
        <h2 style={{ ...display(m ? 32 : 46), maxWidth: "18ch" }}>Fourteen years building, not just advising.</h2>

        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(4, 1fr)", gap: m ? "26px 20px" : "32px 36px", marginTop: m ? 34 : 48 }}>
          {STATS.map((s) => (
            <div key={s.n} style={{ borderTop: "2px solid " + C.ink, paddingTop: 14 }}>
              <div style={{ ...display(m ? 34 : 44), color: C.accent }}>{s.n}</div>
              <div style={{ color: C.mute, fontSize: m ? 14 : 15, marginTop: 6, lineHeight: 1.45 }}>{s.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: m ? 44 : 60, borderTop: "1px solid " + C.line, paddingTop: 26 }}>
          <Eyebrow mb={16}>Domains across 14 years</Eyebrow>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {DOMAINS.map((d) => (
              <span key={d} style={{ fontFamily: mono, fontSize: m ? 12 : 13, color: C.ink, border: "1px solid " + C.line, background: C.card, borderRadius: 999, padding: "7px 14px" }}>{d}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: m ? 28 : 34, display: "grid", gridTemplateColumns: m ? "1fr" : "150px 1fr", gap: m ? 10 : 24, alignItems: "start" }}>
          <Eyebrow>Regulatory</Eyebrow>
          <p style={{ color: C.mute, fontSize: m ? 16 : 17, maxWidth: "64ch", margin: 0 }}>
            {REGULATORY_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
