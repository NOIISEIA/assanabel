"use client";

import { useEffect } from "react";

function unlockPageChrome() {
  const root = document.documentElement;
  const body = document.body;
  const main = document.querySelector("main");

  root.removeAttribute("data-devis");
  body.style.removeProperty("height");
  body.style.removeProperty("overflow");
  if (main instanceof HTMLElement) {
    main.style.removeProperty("height");
    main.style.removeProperty("overflow");
  }
}

/**
 * Verrouille overflow sur /devis, puis restaure chrome + scroll en quittant
 * (évite HP sans header / collée sous le hero sticky).
 */
export function DevisChrome() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-devis", "1");

    return () => {
      unlockPageChrome();
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
}
