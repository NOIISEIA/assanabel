"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import type { CarteSection } from "@/data/carte";

export type CarteBand = {
  id: string;
  /** Conservé pour compatibilité — plus utilisé (fond ivory + visuels en arche) */
  background?: string;
  dark?: boolean;
  label?: string;
  sections: CarteSection[];
};

/** Un visuel par section — affiché dans la forme découpée à côté de la carte */
const SECTION_IMAGES: Record<string, string> = {
  "classiques-froids": "/images/carousel-mezzeh.webp",
  salades: "/images/resto-table-service.webp",
  tartares: "/images/resto-plat.webp",
  chauds: "/images/carousel-craft.webp",
  croustillants: "/images/carte-bg-mezzeh.webp",
  incontournables: "/images/resto-salle.webp",
  noblesse: "/images/carte-crevettes.webp",
  grillades: "/images/carte-bg-grillades.webp",
  poissons: "/images/plat-poisson.webp",
  desserts: "/images/traiteur-falafel.webp",
  midi: "/images/carte-bg-terrasse.webp",
};

/** Couleur d’accent qui tourne de section en section */
/** Palette de la charte : bronze, olive, grenade, bronze foncé */
const ACCENTS = ["#a5834a", "#65745d", "#a64f57", "#80612f"] as const;

/** Formes découpées — arche, pilule, feuille */
const SHAPES = [
  "rounded-t-[999px] rounded-b-[1.5rem]",
  "rounded-[999px]",
  "rounded-[1.5rem] rounded-tr-[999px] rounded-bl-[999px]",
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

function Marquee({
  label,
  reverse,
}: {
  label: string;
  reverse?: boolean;
}) {
  const unit = (
    <span className="flex shrink-0 items-center">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="flex items-center">
          <span className="font-title px-5 text-xl font-medium tracking-[0.08em] whitespace-nowrap text-champagne uppercase md:px-8 md:text-3xl">
            {label}
          </span>
          <span
            className="bg-bronze size-1.5 rotate-45 md:size-2"
            aria-hidden
          />
        </span>
      ))}
    </span>
  );

  return (
    <div className="relative overflow-hidden bg-ink py-2.5 md:py-3.5">
      <p className="sr-only">{label}</p>
      <div
        className={`carte-marquee flex w-max ${
          reverse ? "carte-marquee--reverse" : ""
        }`}
        aria-hidden
      >
        {unit}
        {unit}
      </div>
    </div>
  );
}

function SectionVisual({
  section,
  accent,
  shape,
  flip,
  wide,
  progress,
}: {
  section: CarteSection;
  accent: string;
  shape: string;
  flip: boolean;
  wide: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduce = useReducedMotion();
  const imageY = useTransform(progress, [0, 1], ["-9%", "9%"]);
  const badgeRotate = useTransform(progress, [0, 1], [-40, 220]);
  const src = SECTION_IMAGES[section.id];

  return (
    <div
      className={`group/visual relative ${
        wide
          ? "mx-auto w-full max-w-5xl"
          : "mx-auto w-[78%] max-w-sm lg:sticky lg:top-28 lg:w-full lg:max-w-none"
      }`}
    >
      {/* Forme décalée de couleur, qui glisse au survol */}
      <div
        aria-hidden
        className={`absolute inset-0 translate-x-4 translate-y-4 transition-transform duration-500 ease-out group-hover/visual:translate-x-6 group-hover/visual:translate-y-6 md:translate-x-6 md:translate-y-6 ${shape}`}
        style={{ backgroundColor: accent, opacity: 0.9 }}
      />

      {/* Photo — parallaxe interne */}
      <div
        className={`relative overflow-hidden ${shape} ${
          wide ? "aspect-[21/9]" : "aspect-[4/5]"
        }`}
      >
        {src ? (
          <motion.div
            className="absolute -inset-[12%]"
            style={reduce ? undefined : { y: imageY }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes={
                wide
                  ? "(min-width: 1024px) 1024px, 100vw"
                  : "(min-width: 1024px) 40vw, 80vw"
              }
              quality={80}
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover/visual:scale-105"
            />
          </motion.div>
        ) : null}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#252a26]/35 to-transparent"
          aria-hidden
        />
      </div>

      {/* Badge circulaire qui tourne au scroll */}
      <div
        aria-hidden
        className={`absolute -bottom-6 z-20 size-28 md:size-36 ${
          flip ? "-right-3 md:-right-10" : "-left-3 md:-left-10"
        }`}
      >
        <motion.svg
          viewBox="0 0 120 120"
          className="absolute inset-0 size-full"
          style={reduce ? undefined : { rotate: badgeRotate }}
        >
          <defs>
            <path
              id={`badge-${section.id}`}
              d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            />
          </defs>
          <circle cx="60" cy="60" r="59" fill="#f7f3ea" />
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <text
            fontSize="9.5"
            fill="#80612f"
            style={{ fontWeight: 600 }}
          >
            <textPath
              href={`#badge-${section.id}`}
              textLength="270"
              lengthAdjust="spacing"
            >
              ASSANABEL — PARIS 14 — ALÉSIA —
            </textPath>
          </text>
        </motion.svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[0.55rem] font-bold tracking-[0.2em] text-ink-soft uppercase">
            Depuis
          </span>
          <span
            className="font-title text-xl leading-none font-medium tracking-[0.04em] md:text-2xl"
            style={{ color: accent }}
          >
            1988
          </span>
        </div>
      </div>
    </div>
  );
}

function MenuRow({
  name,
  desc,
  index,
  accent,
}: {
  name: string;
  desc?: string;
  index: number;
  accent: string;
}) {
  return (
    <motion.li
      className="group/row relative break-inside-avoid py-3 pl-5 transition-transform duration-300 ease-out hover:translate-x-1.5"
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05, ease: EASE }}
    >
      <span
        aria-hidden
        className="absolute top-[1.15rem] left-0 size-2 rotate-45 scale-75 transition-transform duration-300 group-hover/row:scale-125"
        style={{ backgroundColor: accent }}
      />
      <p className="text-[0.95rem] font-semibold tracking-wide text-ink transition-colors duration-300 group-hover/row:[color:var(--accent)]">
        {name}
      </p>
      {desc ? (
        <p className="mt-0.5 text-[0.88rem] leading-relaxed text-ink-soft italic">
          {desc}
        </p>
      ) : null}
    </motion.li>
  );
}

function MenuBlock({
  section,
  index,
  number,
}: {
  section: CarteSection;
  index: number;
  number: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const align = section.align ?? (index % 2 === 0 ? "left" : "right");
  const wide = align === "center";
  /** flip = carte à gauche, visuel à droite */
  const flip = align === "left";
  const accent = ACCENTS[(number - 1) % ACCENTS.length];
  const shape = wide ? SHAPES[0] : SHAPES[(number - 1) % SHAPES.length];
  const tilt = flip ? -0.8 : 0.8;
  const long = section.items.length > 6;

  return (
    <article
      ref={ref}
      className="group/article relative"
      style={{ "--accent": accent } as CSSProperties}
    >
      <div
        className={
          wide
            ? "flex flex-col gap-0"
            : "grid items-start gap-10 lg:grid-cols-12 lg:gap-0"
        }
      >
        {/* Visuel */}
        <motion.div
          className={
            wide
              ? "relative z-0"
              : `relative z-0 lg:col-span-5 lg:row-start-1 ${
                  flip ? "lg:col-start-8" : "lg:col-start-1"
                }`
          }
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <SectionVisual
            section={section}
            accent={accent}
            shape={shape}
            flip={flip}
            wide={wide}
            progress={scrollYProgress}
          />
        </motion.div>

        {/* Carte */}
        <motion.div
          className={
            wide
              ? "relative z-10 mx-auto -mt-10 w-full max-w-3xl md:-mt-20"
              : `relative z-10 lg:row-start-1 lg:mt-16 ${
                  long ? "lg:col-span-8" : "lg:col-span-7"
                } ${
                  flip
                    ? "lg:col-start-1 lg:-mr-12"
                    : "lg:col-start-5 lg:-ml-12"
                }`
          }
          initial={
            reduce
              ? false
              : { opacity: 0, x: wide ? 0 : flip ? -60 : 60, y: wide ? 50 : 0 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <div
            className="relative rotate-[var(--tilt)] border border-[#252a26]/10 bg-white px-7 py-9 shadow-[0_24px_60px_rgba(37,42,38,0.12)] transition-[rotate] duration-500 ease-out hover:rotate-0 md:px-10 md:py-11"
            style={{ "--tilt": reduce ? "0deg" : `${tilt}deg` } as CSSProperties}
          >
            {/* Liseré d’accent qui se déploie */}
            <motion.span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1.5 origin-left"
              style={{ backgroundColor: accent }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            />

            {section.subtitle ? (
              <p
                className="mb-2 text-[0.68rem] font-bold tracking-[0.22em] text-bronze-deep uppercase"
              >
                {section.subtitle}
              </p>
            ) : null}
            <h2 className="font-title mb-6 text-3xl leading-[1.1] font-medium tracking-[0.02em] text-ink md:text-[2.4rem]">
              {section.title}
            </h2>

            <ul
              className={`divide-y divide-ink/10 ${
                long || wide ? "md:columns-2 md:gap-12" : ""
              }`}
            >
              {section.items.map((item, i) => (
                <MenuRow
                  key={item.name}
                  name={item.name}
                  desc={item.desc}
                  index={i}
                  accent={accent}
                />
              ))}
            </ul>

            {section.note ? (
              <p className="mt-6 text-[0.8rem] text-ink-soft italic">
                {section.note}
              </p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function CarteParallax({ bands }: { bands: CarteBand[] }) {
  // Index global de la première section de chaque bande (calculé hors du rendu des sections)
  const bandOffsets = bands.reduce<number[]>((acc, _band, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + bands[i - 1].sections.length);
    return acc;
  }, []);

  return (
    <div className="relative">
      {bands.map((band, bandIndex) => (
        <section key={band.id} className="relative isolate overflow-x-clip">
          {band.label ? (
            <Marquee label={band.label} reverse={bandIndex % 2 === 1} />
          ) : null}

          <div className="relative mx-auto flex max-w-6xl flex-col gap-28 px-5 py-20 md:gap-40 md:px-8 md:py-32">
            {band.sections.map((section, sectionIndex) => {
              const index = bandOffsets[bandIndex] + sectionIndex;
              return (
                <MenuBlock
                  key={section.id}
                  section={section}
                  index={index}
                  number={index + 1}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
