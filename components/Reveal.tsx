"use client";

import { useEffect } from "react";

// Fades in every [data-r] element as it scrolls into view. Renders nothing itself.
export default function Reveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));
    root.setAttribute("data-reveal", "");
    return () => {
      io.disconnect();
      root.removeAttribute("data-reveal");
    };
  }, []);

  return null;
}
