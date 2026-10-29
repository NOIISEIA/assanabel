"use client";

import { useEffect } from "react";

/**
 * Verrouille le chrome site sur /devis via data-devis (plus fiable que :has seul).
 */
export function DevisChrome() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-devis", "1");
    return () => {
      root.removeAttribute("data-devis");
    };
  }, []);

  return null;
}
