import { useEffect } from "react";
import { C, sans } from "./tokens";
import { useMobile } from "./hooks/useMobile";
import { Hero } from "./sections/Hero";
import { Who } from "./sections/Who";
import { How } from "./sections/How";
import { TrackRecord } from "./sections/TrackRecord";
import { Engagement } from "./sections/Engagement";
import { Contact } from "./sections/Contact";

export default function Page() {
  const m = useMobile();

  useEffect(() => {
    const id = "shawn-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: sans, fontSize: m ? 16 : 17, lineHeight: 1.6, width: "100%", overflowX: "hidden" }}>
      <Hero m={m} />
      <Who m={m} />
      <How m={m} />
      <TrackRecord m={m} />
      <Engagement m={m} />
      <Contact m={m} />
    </div>
  );
}
