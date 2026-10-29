"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Pastille flottante « Recevoir » (Privatiser / Traiteur), visible après 80 % de la hauteur d'écran.
 * Se masque quand une section d'appel au devis est à l'écran : donner id="recevoir" ou id="devis" à cette section.
 * À placer dans app/layout.tsx, à côté de <SiteHeader />.
 */
export function RecevoirFab() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith("/devis")) return;
    const onScroll = () => {
      const target = document.getElementById("recevoir") ?? document.getElementById("devis");
      let inCta = false;
      if (target) {
        const r = target.getBoundingClientRect();
        inCta = r.top < window.innerHeight * 0.6 && r.bottom > 0;
      }
      setShow(window.scrollY > window.innerHeight * 0.8 && !inCta);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (pathname?.startsWith("/devis")) return null;

  return (
    <div
      className={`group fixed bottom-4 left-4 z-[95] flex items-center rounded-full bg-ink text-ivory shadow-[0_18px_40px_rgba(37,42,38,0.35)] transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] md:bottom-6 ${
        show ? "translate-y-0" : "translate-y-[140%]"
      }`}
    >
      <b className="px-5 py-4 text-[0.68rem] leading-none font-bold tracking-[0.2em] uppercase">Recevoir</b>
      <div className="flex max-w-0 overflow-hidden transition-[max-width] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-focus-within:max-w-[22rem] group-hover:max-w-[22rem]">
        <Link
          href="/devis?type=privatisation"
          className="bg-bronze px-5 py-4 text-[0.68rem] leading-none font-semibold tracking-[0.16em] whitespace-nowrap text-ink uppercase no-underline transition hover:brightness-110"
        >
          Privatiser
        </Link>
        <Link
          href="/devis?type=traiteur"
          className="rounded-r-full bg-champagne px-5 py-4 text-[0.68rem] leading-none font-semibold tracking-[0.16em] whitespace-nowrap text-ink uppercase no-underline transition hover:brightness-105"
        >
          Traiteur
        </Link>
      </div>
    </div>
  );
}
