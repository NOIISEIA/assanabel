"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BoutonPrivatiser from "@/components/BoutonPrivatiser";

type Kind = "olive" | "sesame" | "persil" | "miettes" | "curedent" | "page";

const SESAME: [number, number, number][] = [[88, 126, -20], [100, 121, 25], [114, 127, -8], [126, 122, 35], [104, 131, 10], [121, 132, -30], [94, 133, 20]];

/** Ce qu'il y a sous chaque cloche (SVG, dans le repère 0 0 220 170 de la cloche). */
const ITEMS: Record<Kind, React.ReactNode> = {
  olive: (
    <>
      <ellipse cx="110" cy="123" rx="15" ry="10" fill="#65745D" />
      <circle cx="117" cy="120" r="4" fill="#A64F57" />
      <ellipse cx="104" cy="119" rx="5" ry="2.5" fill="#fff" opacity=".25" />
    </>
  ),
  sesame: (
    <>
      {SESAME.map(([x, y, r]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="5" ry="2.6" fill="#A5834A" transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </>
  ),
  persil: (
    <>
      <path d="M110 132 C92 128 84 114 88 100 C104 104 112 116 110 132Z" fill="#65745D" />
      <path d="M110 132 C128 128 136 114 132 100 C116 104 108 116 110 132Z" fill="#7d8e73" />
      <path d="M110 132 C104 118 106 104 110 92 C114 104 116 118 110 132Z" fill="#65745D" />
    </>
  ),
  miettes: (
    <>
      <path d="M84 130l8-6 6 5-7 6z" fill="#A5834A" />
      <path d="M104 127l7-5 6 4-6 6z" fill="#B79456" />
      <path d="M122 131l6-4 5 4-5 4z" fill="#A5834A" />
      <path d="M98 135l4-3 3 3-4 2z" fill="#80612F" />
    </>
  ),
  curedent: (
    <>
      <line x1="82" y1="134" x2="138" y2="104" stroke="#A5834A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="138" cy="104" r="4" fill="#A64F57" />
    </>
  ),
  page: (
    <>
      <rect x="86" y="88" width="48" height="42" rx="3" fill="#F7F3EA" stroke="#A5834A" strokeWidth="2" />
      <line x1="94" y1="100" x2="126" y2="100" stroke="#A5834A" strokeWidth="2" />
      <line x1="94" y1="109" x2="120" y2="109" stroke="#C9B48A" strokeWidth="2" />
      <line x1="94" y1="118" x2="124" y2="118" stroke="#C9B48A" strokeWidth="2" />
      <path d="M110 76l6 6-6 6-6-6z" fill="#A5834A" />
    </>
  ),
};

const JOKES: Record<Exclude<Kind, "page">, string> = {
  olive: "Une olive. Une seule. Elle jure qu’elle n’a rien vu.",
  sesame: "Quelques grains de sésame et un air innocent. Pas de page ici.",
  persil: "Du persil. Beaucoup de persil. La page, elle, a filé.",
  miettes: "Des miettes de pain : quelqu’un est passé avant vous.",
  curedent: "Un cure-dent. Quelqu’un a déjà tout mangé, page comprise.",
};

const LABELS = ["Soulever la cloche de gauche", "Soulever la cloche du milieu", "Soulever la cloche de droite"];

function shuffle<T>(a: T[]): T[] {
  return [...a].sort(() => Math.random() - 0.5);
}

function burst(el: Element) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    const round = i % 3 === 0;
    p.style.cssText = `position:fixed;z-index:400;pointer-events:none;left:${cx}px;top:${cy}px;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;background:${
      round ? "#E6D4B5" : "#A5834A"
    };${round ? "border-radius:50%;" : ""}`;
    document.body.appendChild(p);
    const a = (i / 18) * Math.PI * 2 + Math.random() * 0.3;
    const d = 70 + Math.random() * 90;
    const done = () => p.remove();
    p.animate(
      [
        { transform: "translate(0,0) rotate(45deg) scale(1)", opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) rotate(${180 + Math.random() * 200}deg) scale(.2)`, opacity: 0 },
      ],
      { duration: 800 + Math.random() * 500, easing: "cubic-bezier(.2,.7,.3,1)" },
    ).onfinish = done;
    setTimeout(done, 1800);
  }
}

/**
 * Page 404 : « Cette page a quitté la table. »
 * Trois cloches de service ; la bonne page se cache sous l'une d'elles (tirée au hasard après le montage,
 * pour éviter tout écart d'hydratation). Les deux autres renvoient une blague.
 * Les liens de secours sont toujours visibles (accessibilité : le jeu est facultatif).
 */
export default function PageIntrouvable() {
  const [kinds, setKinds] = useState<Kind[] | null>(null);
  const [open, setOpen] = useState<boolean[]>([false, false, false]);
  const [say, setSay] = useState("Trois cloches, une seule page. Bonne chance.");

  useEffect(() => {
    const winner = Math.floor(Math.random() * 3);
    const wrong = shuffle(Object.keys(JOKES) as Exclude<Kind, "page">[]);
    const frame = requestAnimationFrame(() =>
      setKinds([0, 1, 2].map((i) => (i === winner ? "page" : (wrong.pop() as Kind)))),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  const found = !!kinds && open.some((o, i) => o && kinds[i] === "page");

  const toggle = (i: number, el: Element) => {
    if (!kinds) return;
    const next = open.map((o, j) => (j === i ? !o : o));
    setOpen(next);
    const kind = kinds[i];
    if (!next[i]) {
      setSay(kind === "page" ? "Elle s’est renfermée. Timide, la page." : "Cloche refermée. Plus personne n’a rien vu.");
      return;
    }
    if (kind === "page") {
      burst(el);
      setSay("La voilà ! Elle se cachait sous la cloche. Elle voulait juste goûter.");
      return;
    }
    const wrongOpen = next.filter((o, j) => o && kinds[j] !== "page").length;
    const pageOpen = next.some((o, j) => o && kinds[j] === "page");
    setSay(JOKES[kind as Exclude<Kind, "page">] + (!pageOpen && wrongOpen === 2 ? " Il ne reste qu’une cloche : statistiquement, c’est elle." : ""));
  };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink px-5 pt-32 pb-20 text-ivory md:px-8">
      <div className="mx-auto w-full max-w-[76rem] text-center">
        <p className="text-[0.66rem] font-bold tracking-[0.28em] text-champagne uppercase">Erreur 404</p>
        <h1 className="font-title mx-auto mt-4 mb-5 max-w-[46rem] text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[1.08] font-medium tracking-[0.02em]">
          Cette page a quitté la table.
        </h1>
        <p className="font-display mx-auto mb-12 max-w-[34rem] text-[clamp(1.25rem,2vw,1.55rem)] leading-[1.4] text-ivory/85">
          Elle devait être servie ici, mais la cuisine ne l’a pas trouvée. Soulevez une cloche pour la retrouver.
        </p>

        <div className="mx-auto flex max-w-[62rem] justify-center gap-x-[clamp(0.4rem,3vw,2.6rem)] border-b border-champagne/30 pb-[0.2rem]">
          {[0, 1, 2].map((i) => {
            const isOpen = open[i];
            return (
              <button
                key={i}
                type="button"
                aria-expanded={isOpen}
                aria-label={LABELS[i]}
                disabled={!kinds}
                onClick={(e) => toggle(i, e.currentTarget)}
                className="min-w-0 flex-[0_1_15rem] cursor-pointer text-inherit"
              >
                <svg
                  viewBox="-30 -110 280 290"
                  aria-hidden
                  className={`block h-auto w-full overflow-visible ${isOpen ? "" : "motion-safe:animate-[nf-bob_4.6s_ease-in-out_infinite]"}`}
                  style={{ animationDelay: `${-i * 1.5}s` }}
                >
                  <ellipse cx="110" cy="152" rx="100" ry="9" fill="rgba(0,0,0,.35)" />
                  <ellipse cx="110" cy="136" rx="94" ry="14" fill="#F7F3EA" />
                  <ellipse cx="110" cy="134" rx="72" ry="9" fill="#E6D4B5" />
                  <g
                    className={`[transform-box:fill-box] [transform-origin:50%_100%] transition-[opacity,transform] duration-700 ${
                      isOpen ? "scale-100 opacity-100" : "translate-y-2.5 scale-[.8] opacity-0"
                    }`}
                  >
                    {kinds ? ITEMS[kinds[i]] : null}
                  </g>
                  {isOpen ? (
                    <g fill="none" stroke="#E6D4B5" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M90 66 q-9-14 0-28" className="motion-safe:animate-[steam_1.8s_ease-out_.2s_both]" />
                      <path d="M110 60 q9-14 0-30" className="motion-safe:animate-[steam_1.8s_ease-out_.45s_both]" />
                      <path d="M130 66 q-9-14 0-28" className="motion-safe:animate-[steam_1.8s_ease-out_.7s_both]" />
                    </g>
                  ) : null}
                  <g
                    className={`[transform-box:fill-box] [transform-origin:50%_100%] transition-transform duration-[900ms] ease-[cubic-bezier(.34,1.56,.64,1)] ${
                      isOpen ? "translate-x-[46px] -translate-y-[92px] rotate-[24deg]" : ""
                    }`}
                  >
                    <path d="M22 126 C22 56 62 24 110 24 C158 24 198 56 198 126 Z" fill="#E6D4B5" />
                    <path d="M46 104 C50 70 72 46 98 38" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" />
                    <rect x="12" y="124" width="196" height="10" rx="5" fill="#A5834A" />
                    <rect x="106" y="14" width="8" height="12" fill="#80612F" />
                    <circle cx="110" cy="12" r="10" fill="#A5834A" />
                  </g>
                </svg>
              </button>
            );
          })}
        </div>

        <p role="status" aria-live="polite" className="font-display mx-auto mt-7 min-h-14 max-w-[36rem] text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.35] text-champagne">
          {say}
        </p>

        {found ? (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <BoutonPrivatiser href="/" tone="terre">
              Retour à l’accueil
            </BoutonPrivatiser>
            <BoutonPrivatiser href="/la-carte" tone="clair">
              Voir la carte
            </BoutonPrivatiser>
            <Link href="/devis" className="text-[0.78rem] font-semibold tracking-[0.14em] text-champagne uppercase underline decoration-champagne/40 underline-offset-4">
              Réserver votre événement →
            </Link>
          </div>
        ) : null}

        <p className="mt-12 text-[0.9rem] text-ivory/70">
          Ou repartez directement :{" "}
          {[
            ["/", "Accueil"],
            ["/la-carte", "La carte"],
            ["/traiteur", "Traiteur"],
            ["/privatisation", "Privatisation"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="mx-2 whitespace-nowrap text-champagne no-underline border-b border-champagne/40 hover:border-champagne">
              {label}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}
