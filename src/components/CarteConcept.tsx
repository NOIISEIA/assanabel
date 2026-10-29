"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    title: "Les Mezzehs",
    text: "Un assortiment de petits plats en entrée, posés au centre de la table.",
    accent: "#a5834a",
  },
  {
    title: "Le présentoir de grillades",
    text: "Brochettes et viandes grillées, servies sur un présentoir à partager.",
    accent: "#65745d",
  },
];

export function CarteConcept({ body }: { body: string }) {
  const reduce = useReducedMotion();
  const from = (x: number, y = 0) =>
    reduce ? false : ({ opacity: 0, x, y } as const);

  return (
    <section className="relative overflow-x-clip bg-ivory px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Texte + étapes */}
        <div className="lg:col-span-6">
          <motion.p
            className="mb-5 text-[0.66rem] font-bold tracking-[0.28em] text-bronze-deep uppercase"
            initial={from(-30)}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            À partager
          </motion.p>
          <motion.h2
            className="font-title text-4xl leading-[1.04] font-medium tracking-[0.02em] text-ink md:text-6xl"
            initial={from(-40)}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
          >
            Une table,
            <br />
            deux temps.
          </motion.h2>
          <motion.p
            className="mt-7 max-w-md text-[1.02rem] leading-[1.7] text-ink-soft"
            initial={from(-30)}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            {body}
          </motion.p>

          <ol className="mt-10 space-y-5">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                className="group relative block border border-ink/10 bg-white py-5 pr-6 pl-8 shadow-[0_18px_40px_rgba(37,42,38,0.07)] transition-transform duration-300 ease-out hover:-translate-y-1 md:ml-[var(--indent)]"
                style={{ ["--indent" as string]: i === 1 ? "3rem" : "0rem" }}
                initial={from(-50)}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.15, ease: EASE }}
              >
                <span>
                  <span className="font-title block text-[1.3rem] leading-[1.15] font-medium tracking-[0.04em] text-ink">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink-soft">
                    {s.text}
                  </span>
                </span>
                <span
                  className="absolute inset-y-0 left-0 w-1.5 origin-top scale-y-50 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ backgroundColor: s.accent }}
                  aria-hidden
                />
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Visuels composés */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none lg:pl-12"
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="relative mx-auto w-[82%] lg:w-[78%]">
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-[999px] rounded-b-3xl bg-bronze md:translate-x-7 md:translate-y-7"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl">
              <Image
                src="/images/carte-hero.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                quality={80}
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#252a26]/35 to-transparent"
                aria-hidden
              />
            </div>

            {/* Petit cercle photo qui flotte */}
            <motion.div
              className="absolute -bottom-10 -left-8 size-36 overflow-hidden rounded-full border-[6px] border-ivory shadow-[0_18px_40px_rgba(37,42,38,0.2)] md:-left-16 md:size-48"
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/carte-bg-grillades.webp"
                alt=""
                fill
                sizes="200px"
                quality={75}
                className="object-cover"
              />
            </motion.div>

            {/* Sticker tournant */}
            <div
              className="absolute -top-6 -right-4 size-28 md:-right-10 md:size-36"
              aria-hidden
            >
              <svg
                viewBox="0 0 120 120"
                className="absolute inset-0 size-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
              >
                <defs>
                  <path
                    id="concept-badge"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <circle cx="60" cy="60" r="59" fill="#996849" />
                <text fontSize="9.5" fill="#f7f3ea" fontWeight="600">
                  <textPath
                    href="#concept-badge"
                    textLength="270"
                    lengthAdjust="spacing"
                  >
                    MENU CONÇU POUR TOUTE LA TABLE — À PARTAGER —
                  </textPath>
                </text>
              </svg>
              <span className="font-title absolute inset-0 flex items-center justify-center text-2xl leading-none font-medium tracking-[0.12em] text-ivory md:text-3xl">
                A
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
