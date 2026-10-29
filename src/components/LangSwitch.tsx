"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Switch FR / EN — DESIGN SEULEMENT pour l'instant.
 * Cliquer sur EN fait glisser le curseur, affiche « English version · coming soon », puis revient sur FR.
 * Quand la version anglaise existera : remplacer `choose` par un vrai changement de locale (routing i18n).
 *
 * `onDark` : le header est sur fond sombre (hero) -> curseur ivoire, texte actif encre ; sinon l'inverse.
 */
export function LangSwitch({ onDark = true }: { onDark?: boolean }) {
  const [en, setEn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const choose = (next: boolean) => {
    setEn(next);
    if (timer.current) clearTimeout(timer.current);
    if (next) timer.current = setTimeout(() => setEn(false), 2800);
  };

  return (
    <div className="relative">
      <div
        role="group"
        aria-label="Langue du site"
        className="relative inline-grid grid-cols-2 items-center rounded-full border border-current/40 p-[3px]"
      >
        <span
          aria-hidden
          className={`absolute top-[3px] bottom-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-current shadow-[0_4px_12px_rgba(0,0,0,0.28)] transition-transform duration-[650ms] ease-[cubic-bezier(.34,1.56,.64,1)] ${
            en ? "translate-x-full" : ""
          }`}
        />
        {(["fr", "en"] as const).map((l) => {
          const active = (l === "en") === en;
          return (
            <button
              key={l}
              type="button"
              lang={l}
              aria-pressed={active}
              onClick={() => choose(l === "en")}
              className={`relative z-10 min-w-[2.45rem] cursor-pointer px-2 py-[0.45rem] text-[0.6rem] leading-none font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                active ? (onDark ? "text-ink" : "text-ivory") : "hover:opacity-70"
              }`}
            >
              {l.toUpperCase()}
            </button>
          );
        })}
      </div>
      <span
        role="status"
        className={`pointer-events-none absolute top-[calc(100%+0.8rem)] right-0 bg-ink px-4 py-3 text-[0.58rem] leading-snug font-bold tracking-[0.16em] whitespace-nowrap text-ivory uppercase shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition-[opacity,transform] duration-500 ${
          en ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
        }`}
      >
        English version · coming soon
      </span>
    </div>
  );
}
