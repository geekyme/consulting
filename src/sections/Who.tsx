import { C, display, wrap, secPad } from "../tokens";
import { WHO_CARDS } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Who({ m }: { m: boolean }) {
  return (
    <section style={{ padding: secPad(m) }}>
      <div style={wrap(m)}>
        <Eyebrow mb={16}>Who I work with</Eyebrow>
        <h2 style={{ ...display(m ? 32 : 46), maxWidth: "16ch" }}>Two rooms, one conversation.</h2>
        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? 16 : 24, marginTop: m ? 30 : 44 }}>
          {WHO_CARDS.map((c) => (
            <div key={c.tag} style={{ background: C.card, border: "1px solid " + C.line, borderRadius: 10, padding: m ? "26px 22px" : "34px 30px" }}>
              <div style={{ marginBottom: 18 }}><Tag variant={c.tagVariant}>{c.tag}</Tag></div>
              <h3 style={{ ...display(m ? 24 : 28), lineHeight: 1.12, marginBottom: 12 }}>{c.heading}</h3>
              <p style={{ color: C.mute, fontSize: m ? 16 : 17 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
