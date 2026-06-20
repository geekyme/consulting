import { C, mono, display, wrap, secPad } from "../tokens";
import { HOW_LEVELS } from "../content";
import { Eyebrow } from "../ui/Eyebrow";

export function How({ m }: { m: boolean }) {
  return (
    <section style={{ padding: secPad(m), background: C.dark, color: C.lightOnDark }}>
      <div style={wrap(m)}>
        <Eyebrow onDark mb={16}>How I work</Eyebrow>
        <h2 style={{ ...display(m ? 32 : 46), maxWidth: "18ch" }}>
          I work at every altitude. My role stays advisory throughout.
        </h2>
        <p style={{ color: C.muteOnDark, maxWidth: "58ch", marginTop: 18, fontSize: m ? 16 : 18 }}>
          Most advisors stop at the strategy deck. Most builders never sat in the budget conversation.
          I move between the two without losing the thread, partnering with your team rather than working in place of it.
        </p>

        <div style={{ marginTop: m ? 42 : 58, position: "relative", paddingLeft: m ? 30 : 38 }}>
          <div style={{ position: "absolute", left: m ? 9 : 11, top: 12, bottom: 12, width: 2, background: `linear-gradient(${C.accent}, rgba(30,69,199,0.2))` }} />
          {HOW_LEVELS.map((lv, i) => (
            <div key={lv.coord} style={{ position: "relative", paddingBottom: i === HOW_LEVELS.length - 1 ? 0 : (m ? 36 : 44) }}>
              <div style={{ position: "absolute", left: m ? -30 : -38, top: 5, width: 12, height: 12, borderRadius: "50%", background: C.dark, border: "2px solid " + C.accent, boxSizing: "border-box" }} />
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent, marginBottom: 8 }}>{lv.coord}</div>
              <h3 style={{ ...display(m ? 23 : 27), color: C.lightOnDark, marginBottom: 8 }}>{lv.heading}</h3>
              <p style={{ color: C.muteOnDark, maxWidth: "60ch", fontSize: m ? 16 : 17 }}>{lv.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
