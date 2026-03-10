"use client";

import { useEffect } from "react";

export function ScrollTracker() {
  useEffect(() => {
    const tracked: Record<number, boolean> = {};
    const thresholds = [25, 50, 75, 100];

    function onScroll() {
      const scrollPct = Math.round(
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
          100
      );
      thresholds.forEach((t) => {
        if (scrollPct >= t && !tracked[t]) {
          tracked[t] = true;
          console.log(`Scroll depth: ${t}%`);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleCTA(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href*="mailto"], a[href="#contact"]');
      if (link) {
        console.log(`CTA click: ${link.textContent?.trim()}`);
      }
    }

    document.addEventListener("click", handleCTA);
    return () => document.removeEventListener("click", handleCTA);
  }, []);

  return null;
}
