import { C, mono, display } from "../tokens";
import { HOW_LEVELS } from "../content";
import { Eyebrow } from "../ui/Eyebrow";

export function How() {
  return (
    <section style={{ padding: "var(--sec-y)", background: C.dark, color: C.lightOnDark }}>
      <div className="wrap">
        <Eyebrow onDark mb={16}>How I work</Eyebrow>
        <h2 style={{ ...display("var(--h2-f)"), maxWidth: "18ch" }}>
          I work at every altitude. My role stays advisory throughout.
        </h2>
        <p style={{ color: C.muteOnDark, maxWidth: "58ch", marginTop: 18, fontSize: "var(--how-p-f)" }}>
          Most advisors stop at the strategy deck. Most builders never sat in the budget conversation.
          I move between the two without losing the thread, partnering with your team rather than working in place of it.
        </p>

        <div style={{ marginTop: "var(--how-tl-mt)", position: "relative", paddingLeft: "var(--how-tl-pl)" }}>
          <div style={{ position: "absolute", left: "var(--how-line-l)", top: 12, bottom: 12, width: 2, background: `linear-gradient(${C.accent}, rgba(30,69,199,0.2))` }} />
          {HOW_LEVELS.map((lv, i) => (
            <div key={lv.coord} style={{ position: "relative", paddingBottom: i === HOW_LEVELS.length - 1 ? 0 : "var(--how-item-pb)" }}>
              <div style={{ position: "absolute", left: "var(--how-dot-l)", top: 5, width: 12, height: 12, borderRadius: "50%", background: C.dark, border: "2px solid " + C.accent, boxSizing: "border-box" }} />
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent, marginBottom: 8 }}>{lv.coord}</div>
              <h3 style={{ ...display("var(--how-h3-f)"), color: C.lightOnDark, marginBottom: 8 }}>{lv.heading}</h3>
              <p style={{ color: C.muteOnDark, maxWidth: "60ch", fontSize: "var(--how-body-f)" }}>{lv.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
