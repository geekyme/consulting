import { useState, useEffect } from "react";

export function useMobile(breakpoint = 760): boolean {
  // Start at 1024 to match the SSR-rendered HTML, then update after hydration.
  const [w, setW] = useState(1024);

  useEffect(() => {
    setW(window.innerWidth);
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return w < breakpoint;
}
