import { useState, useEffect } from "react";

export function useMobile(breakpoint = 760): boolean {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return w < breakpoint;
}
