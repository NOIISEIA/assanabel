"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

const slides = [
  {
    src: "/images/resto-plat.webp",
    alt: "Houmous Assanabel — lumière tamisée",
  },
  {
    src: "/images/plat-poisson.webp",
    alt: "Poisson grillé Assanabel, dressage d’auteur",
  },
  {
    src: "/images/carousel-mezzeh.webp",
    alt: "Mezzeh libanais généreux à partager",
  },
  {
    src: "/images/hospitalite-salle.webp",
    alt: "Ambiance soirée Assanabel à Paris",
  },
  {
    src: "/images/resto-table-service.webp",
    alt: "Table Assanabel, service et cuisine libanaise",
  },
  {
    src: "/images/traiteur-falafel.webp",
    alt: "Pièces traiteur Assanabel pour vos réceptions",
  },
];

const loopSlides = [...slides, ...slides];

export function ExperienceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const halfWidthRef = useRef(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    halfWidthRef.current = el.scrollWidth / 2;
  }, []);

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.65, 380);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    let raf = 0;
    let last = performance.now();
    const speed = 0.045; // px per ms

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && halfWidthRef.current > 0) {
        el.scrollLeft += speed * dt;
        if (el.scrollLeft >= halfWidthRef.current) {
          el.scrollLeft -= halfWidthRef.current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  return (
    <div className="relative pt-14 text-ivory md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1c1814] via-[#1c1814]/92 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto mb-8 flex max-w-7xl items-end justify-between gap-6 px-5 md:mb-10 md:px-8">
        <div>
          <p className="mb-2 text-[0.68rem] font-medium tracking-[0.24em] text-champagne uppercase">
            L’expérience Assanabel
          </p>
          <h2 className="font-display text-3xl md:text-4xl">
            Gestes, tables & saveurs
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            className="border border-ivory/35 px-3 py-2 text-sm tracking-widest uppercase transition-colors hover:border-ivory hover:bg-ivory/10"
            aria-label="Diapositive précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            className="border border-ivory/35 px-3 py-2 text-sm tracking-widest uppercase transition-colors hover:border-ivory hover:bg-ivory/10"
            aria-label="Diapositive suivante"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative flex gap-3 overflow-x-auto px-5 pb-16 scroll-smooth md:gap-4 md:px-8 md:pb-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onTouchStart={() => {
          pausedRef.current = true;
        }}
        onTouchEnd={() => {
          pausedRef.current = false;
        }}
      >
        {loopSlides.map((slide, i) => (
          <figure
            key={`${slide.src}-${i}`}
            className="relative aspect-[3/4] w-[72vw] max-w-[320px] shrink-0 overflow-hidden sm:w-[42vw] md:w-[28vw] lg:max-w-[360px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 72vw, 28vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
