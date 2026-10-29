import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BoutonPrivatiser from "@/components/BoutonPrivatiser";
import { CarteConcept } from "@/components/CarteConcept";
import { CarteParallax, type CarteBand } from "@/components/CarteParallax";
import { carteBands, carteIntro, carteSections } from "@/data/carte";

export const metadata: Metadata = {
  title: "La carte | Restaurant libanais Assanabel Paris",
  description:
    "Découvrez la carte Assanabel : mezzeh, grillades, poissons et desserts libanais à Paris 14 depuis 1988.",
  alternates: {
    canonical: "/la-carte",
  },
};

const bands: CarteBand[] = carteBands.map((band) => ({
  id: band.id,
  label: band.label,
  background: band.background,
  dark: band.dark,
  sections: carteSections.filter((s) => band.sectionIds.includes(s.id)),
}));

export default function LaCartePage() {
  return (
    <div className="relative bg-ivory text-ink">
      {/* Hero plein cadre — photo restaurant */}
      <header className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-ivory">
        <Image
          src="/images/carte-hero.webp"
          alt="Table Assanabel — mezzeh, grillades et partage"
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#252a26]/55" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#252a26]/85 via-[#252a26]/35 to-[#252a26]/40"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-16 pt-36 text-center md:px-8 md:pb-24">
          <p className="mb-4 text-[0.66rem] font-bold tracking-[0.28em] text-champagne uppercase">
            {carteIntro.eyebrow}
          </p>
          <h1 className="font-title text-4xl leading-[1.02] font-medium tracking-[0.02em] md:text-6xl lg:text-7xl">
            {carteIntro.title}
          </h1>
          <p className="font-display mx-auto mt-6 max-w-xl text-xl text-champagne md:text-2xl">
            {carteIntro.lead}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ivory/85">
            {carteIntro.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BoutonPrivatiser href="/devis" tone="terre">
              Réserver votre événement
            </BoutonPrivatiser>
            <BoutonPrivatiser href={carteIntro.pdfUrl} tone="clair" external>
              Télécharger la carte PDF
            </BoutonPrivatiser>
          </div>
        </div>
      </header>

      {/* Concept — carte décalée */}
      <CarteConcept body={carteIntro.conceptBody} />

      {/* Bandes menu : fonds photo + cartes décalées */}
      <CarteParallax bands={bands} />

      {/* CTA */}
      <section className="relative z-10 bg-ivory px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-title text-2xl leading-[1.1] font-medium tracking-[0.02em] text-ink md:text-4xl">
            Une table à Paris 14
          </h2>
          <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-ink-soft">
            Réservez votre table ou privatisez la maison pour votre prochaine
            réception.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BoutonPrivatiser href="/devis" tone="terre">
              Réserver votre événement
            </BoutonPrivatiser>
            <BoutonPrivatiser href="/privatisation" tone="clair">
              Privatiser
            </BoutonPrivatiser>
            <a
              href={carteIntro.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[0.78rem] font-semibold tracking-[0.12em] text-bronze-deep uppercase underline decoration-bronze/40 underline-offset-4"
            >
              Carte PDF
            </a>
          </div>
          <Link
            href="/"
            className="mt-8 text-[0.78rem] tracking-[0.12em] text-ink-soft uppercase underline decoration-bronze/30 underline-offset-4 hover:text-ink"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
