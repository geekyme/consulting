import { useEffect } from "react";
import { C, sans } from "./tokens";
import { Hero } from "./sections/Hero";
import { Who } from "./sections/Who";
import { How } from "./sections/How";
import { TrackRecord } from "./sections/TrackRecord";
import { Engagement } from "./sections/Engagement";
import { Contact } from "./sections/Contact";

export default function Page() {
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
    <div style={{ background: C.paper, color: C.ink, fontFamily: sans, lineHeight: 1.6, width: "100%", overflowX: "hidden" }}>
      <Hero />
      <Who />
      <How />
      <TrackRecord />
      <Engagement />
      <Contact />
    </div>
  );
}
