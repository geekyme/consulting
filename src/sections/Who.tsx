import { C, display } from "../tokens";
import { WHO_CARDS } from "../content";
import { Tag } from "../ui/Tag";
import { Eyebrow } from "../ui/Eyebrow";

export function Who() {
  return (
    <section style={{ padding: "var(--sec-y)" }}>
      <div className="wrap">
        <Eyebrow mb={16}>Who I work with</Eyebrow>
        <h2 style={{ ...display("var(--h2-f)"), maxWidth: "16ch" }}>Two rooms, one conversation.</h2>
        <div className="grid-who">
          {WHO_CARDS.map((c) => (
            <div key={c.tag} style={{ background: C.card, border: "1px solid " + C.line, borderRadius: 10, padding: "var(--who-card-p)" }}>
              <div style={{ marginBottom: 18 }}><Tag variant={c.tagVariant}>{c.tag}</Tag></div>
              <h3 style={{ ...display("var(--who-h3-f)"), lineHeight: 1.12, marginBottom: 12 }}>{c.heading}</h3>
              <p style={{ color: C.mute, fontSize: "var(--who-p-f)" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
