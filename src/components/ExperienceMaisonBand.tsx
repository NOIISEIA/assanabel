import Image from "next/image";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { MaisonSection } from "@/components/MaisonSection";

/** Carrousel + Maison partagent UN seul fond photo — plus de démarcation. */
export function ExperienceMaisonBand() {
  return (
    <section className="relative z-10 overflow-visible">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/maison-fond.webp"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[#1c1814]/60"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1c1814]/92 via-[#1c1814]/60 to-[#1c1814]/30"
          aria-hidden
        />
      </div>

      <div className="relative overflow-visible">
        <ExperienceCarousel />
        <MaisonSection />
      </div>
    </section>
  );
}
