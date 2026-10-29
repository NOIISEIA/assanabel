"use client";

import type { MouseEvent, ReactNode } from "react";

type Social = { label: string; handle: string; href: string; aria: string; icon: ReactNode };

const SOCIALS: Social[] = [
  {
    label: "Instagram",
    handle: "@assanabel.paris",
    href: "https://www.instagram.com/assanabel.paris/",
    aria: "Instagram, @assanabel.paris (s’ouvre dans un nouvel onglet)",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[1.45rem] fill-none stroke-current stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.9" />
        <circle cx="17.3" cy="6.7" r="1.1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "/assanabel",
    href: "https://www.facebook.com/assanabel",
    aria: "Facebook, assanabel (s’ouvre dans un nouvel onglet)",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[1.45rem] fill-current">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V13h2.7v8h3.1z" />
      </svg>
    ),
  },
];

/** « Pop » au clic : rebond de l'icône + éclat de 14 losanges / points. Le lien s'ouvre normalement (nouvel onglet). */
function pop(e: MouseEvent<HTMLAnchorElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const icon = e.currentTarget.querySelector<HTMLElement>("[data-ic]");
  if (!icon) return;

  icon.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.5) rotate(-12deg)", offset: 0.3 },
      { transform: "scale(.9) rotate(4deg)", offset: 0.6 },
      { transform: "scale(1.12) rotate(-6deg)" },
    ],
    { duration: 600, easing: "cubic-bezier(.34,1.56,.64,1)" },
  );

  const r = icon.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    const round = i % 3 === 0;
    p.style.cssText = `position:fixed;z-index:400;pointer-events:none;left:${cx}px;top:${cy}px;width:8px;height:8px;margin:-4px 0 0 -4px;background:${
      round ? "#E6D4B5" : "#A5834A"
    };${round ? "border-radius:50%;" : ""}`;
    document.body.appendChild(p);
    const a = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
    const d = 48 + Math.random() * 54;
    const done = () => p.remove();
    p.animate(
      [
        { transform: "translate(0,0) rotate(45deg) scale(1)", opacity: 1 },
        {
          transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) rotate(${180 + Math.random() * 180}deg) scale(.2)`,
          opacity: 0,
        },
      ],
      { duration: 650 + Math.random() * 350, easing: "cubic-bezier(.2,.7,.3,1)" },
    ).onfinish = done;
    setTimeout(done, 1600);
  }
}

export function SocialLinks() {
  return (
    <ul className="grid gap-[0.45rem]">
      {SOCIALS.map((s, i) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.aria}
            onClick={pop}
            className="group inline-flex items-center gap-4 text-ivory no-underline"
          >
            <span
              data-ic
              className="relative grid size-[3.6rem] flex-none place-items-center rounded-full border border-champagne/50 text-champagne transition-[background-color,color,border-color,transform] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink group-focus-visible:scale-110 group-focus-visible:bg-bronze group-focus-visible:text-ink"
            >
              {s.icon}
              {/* anneau qui pulse (keyframes `ringp` à ajouter dans globals.css, voir globals-additions.css) */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-full border border-bronze opacity-0 motion-safe:animate-[ringp_3.4s_ease-out_infinite]"
                style={{ animationDelay: i ? "1.7s" : "0s" }}
              />
            </span>
            <span>
              <b className="block text-[0.64rem] leading-none font-bold tracking-[0.24em] text-champagne uppercase">{s.label}</b>
              <i className="font-display mt-1.5 block text-[1.3rem] leading-[1.1] not-italic">{s.handle}</i>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
