import { C, sans, mono, display } from "../tokens";
import { META, WHAT_YOU_GET } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Engagement() {
  return (
    <section id="engage" style={{ padding: "var(--sec-y)", background: C.dark, color: C.lightOnDark }}>
      <div className="wrap">
        <Eyebrow onDark mb={16}>Engagement</Eyebrow>
        <h2 style={{ ...display("var(--h2-f)"), maxWidth: "16ch" }}>Simple terms, senior time.</h2>

        <div className="grid-engage">
          {/* Pricing card */}
          <div style={{ background: C.darkSurface, border: "1px solid rgba(30,69,199,0.45)", borderRadius: 12, padding: "var(--eng-card-p)" }}>
            <Tag variant="exec" onDark>Advisory engagement</Tag>
            <div style={{ ...display("var(--eng-pr-f)"), color: C.lightOnDark, marginTop: 20, lineHeight: 0.95 }}>
              {META.price}
              <span style={{ fontFamily: mono, fontSize: "var(--eng-usd-f)", color: C.muteOnDark, letterSpacing: "0.05em" }}> USD</span>
            </div>
            <div style={{ fontFamily: mono, fontSize: 13, color: C.muteOnDark, marginTop: 18, lineHeight: 1.7 }}>
              3 hours of focused advisory time.<br />
              Build and implementation work is scoped and quoted separately.
            </div>
          </div>

          {/* What you get */}
          <div>
            <h3 style={{ ...display("var(--eng-h3-f)"), color: C.lightOnDark, marginBottom: 18, fontFamily: sans }}>What that buys you</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {WHAT_YOU_GET.map((li) => (
                <li key={li} style={{ color: C.muteOnDark, fontSize: "var(--eng-li-f)", padding: "0 0 14px 24px", position: "relative", lineHeight: 1.5 }}>
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
