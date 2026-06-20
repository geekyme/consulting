import { C, sans, mono, display, wrap, secPad } from "../tokens";
import { META, WHAT_YOU_GET } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Engagement({ m }: { m: boolean }) {
  return (
    <section id="engage" style={{ padding: secPad(m), background: C.dark, color: C.lightOnDark }}>
      <div style={wrap(m)}>
        <Eyebrow onDark mb={16}>Engagement</Eyebrow>
        <h2 style={{ ...display(m ? 32 : 46), maxWidth: "16ch" }}>Simple terms, senior time.</h2>

        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "minmax(0, 0.95fr) 1fr", gap: m ? 24 : 40, marginTop: m ? 32 : 48, alignItems: "start" }}>

          {/* Pricing card */}
          <div style={{ background: C.darkSurface, border: "1px solid rgba(30,69,199,0.45)", borderRadius: 12, padding: m ? "28px 24px" : "38px 34px" }}>
            <Tag variant="exec" onDark>Advisory engagement</Tag>
            <div style={{ ...display(m ? 50 : 64), color: C.lightOnDark, marginTop: 20, lineHeight: 0.95 }}>
              {META.price}
              <span style={{ fontFamily: mono, fontSize: m ? 16 : 18, color: C.muteOnDark, letterSpacing: "0.05em" }}> USD</span>
            </div>
            <div style={{ fontFamily: mono, fontSize: 13, color: C.muteOnDark, marginTop: 18, lineHeight: 1.7 }}>
              3 hours of focused advisory time.<br />
              Build and implementation work is scoped and quoted separately.
            </div>
          </div>

          {/* What you get */}
          <div>
            <h3 style={{ ...display(m ? 24 : 28), color: C.lightOnDark, marginBottom: 18, fontFamily: sans }}>What that buys you</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {WHAT_YOU_GET.map((li) => (
                <li key={li} style={{ color: C.muteOnDark, fontSize: m ? 16 : 17, padding: "0 0 14px 24px", position: "relative", lineHeight: 1.5 }}>
                  <span style={{ position: "absolute", left: 0, top: 12, width: 10, height: 2, background: C.accent }} />
                  {li}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
