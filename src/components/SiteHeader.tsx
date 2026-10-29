"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BoutonPrivatiser from "@/components/BoutonPrivatiser";
import { LangSwitch } from "@/components/LangSwitch";

type NavLink = { href: string; label: string; external?: boolean };

/** Liens du menu plein écran (burger) */
const MENU_LINKS: NavLink[] = [
  { href: "/la-carte", label: "La carte" },
  { href: "/traiteur", label: "Traiteur" },
  { href: "/privatisation", label: "Privatisation" },
  { href: "/ils-nous-font-confiance", label: "Ils nous font confiance" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Réserver votre événement" },
];

/**
 * Header fixe au scroll + menu burger plein écran.
 * Ouverture : fond encre, liens en apparition 1 à 1.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      }
      setScrolled(y > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menu]);

  const barSolid = scrolled || menu;

  return (
    /* Contexte de stacking dédié : évite que le hero sticky/vidéo passe devant au 1er paint */
    <div className="site-header relative z-[200]">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[130] h-[2px]"
        aria-hidden
      >
        <span
          ref={bar}
          className="block h-full origin-left scale-x-0 bg-bronze"
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-[120] flex items-center justify-between gap-4 px-5 transition-[background-color,box-shadow,padding,color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:px-8 ${
          barSolid
            ? "bg-ink/95 py-3.5 text-ivory shadow-[0_1px_0_rgba(247,243,234,0.08)] backdrop-blur-md"
            : "bg-transparent py-4 text-ivory md:py-5"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        <Link
          href="/"
          className="font-title relative z-[121] text-[1.45rem] tracking-[0.22em] text-ivory no-underline"
          aria-label="Assanabel, accueil"
          onClick={() => setMenu(false)}
        >
          ASSANABEL
        </Link>

        <div className="relative z-[121] flex items-center gap-3">
          <LangSwitch onDark />
          <div className="hidden sm:block [&_.assanabel-btn-wrap]:m-0">
            <BoutonPrivatiser href="/devis" compact tone="terre">
              Réserver votre événement
            </BoutonPrivatiser>
          </div>
          <button
            type="button"
            className="relative flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px]"
            aria-expanded={menu}
            aria-controls="menu-fullscreen"
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenu((v) => !v)}
          >
            <i
              className={`block h-[1.5px] w-[22px] bg-ivory transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                menu ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <i
              className={`block h-[1.5px] w-[22px] bg-ivory transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                menu ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <i
              className={`block h-[1.5px] w-[22px] bg-ivory transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                menu ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
            {menu ? (
              <span
                className="absolute top-2 right-2 size-1.5 rounded-full bg-bronze"
                aria-hidden
              />
            ) : null}
          </button>
        </div>
      </header>

      {/* Overlay plein écran */}
      <div
        id="menu-fullscreen"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menu}
        className={`fixed inset-0 z-[110] flex flex-col bg-ink text-ivory transition-[opacity,visibility] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          menu
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Fond animé */}
        <div
          className={`absolute inset-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
            menu ? "scale-100" : "scale-[1.04]"
          }`}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(153,104,73,0.18),transparent_55%)]"
          aria-hidden
        />

        <nav
          className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-24 pb-10 md:px-12 lg:px-16"
          aria-label="Menu principal"
        >
          <ul className="flex flex-col gap-1 md:gap-2">
            {MENU_LINKS.map((link, i) => {
              const current = pathname === link.href;
              const delay = menu ? 180 + i * 90 : 0;
              const itemClass = `font-title block py-1.5 text-[clamp(1.85rem,5.5vw,3.4rem)] uppercase tracking-[0.04em] no-underline transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                current ? "text-champagne" : "text-champagne/90 hover:text-ivory"
              } ${
                menu
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-8 opacity-0 blur-[8px]"
              }`;

              return (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClass}
                      style={{ transitionDelay: `${delay}ms` }}
                      onClick={() => setMenu(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={itemClass}
                      style={{ transitionDelay: `${delay}ms` }}
                      aria-current={current ? "page" : undefined}
                      onClick={() => setMenu(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <p
            className={`mt-12 text-[0.68rem] tracking-[0.22em] text-champagne/80 uppercase transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:mt-16 ${
              menu
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: menu
                ? `${180 + MENU_LINKS.length * 90}ms`
                : "0ms",
            }}
          >
            6 rue d’Alésia · 75014 Paris · 01 42 79 86 86
          </p>
        </nav>
      </div>
    </div>
  );
}

/** Conservé pour imports éventuels (footer, etc.) */
export const NAV = MENU_LINKS;
