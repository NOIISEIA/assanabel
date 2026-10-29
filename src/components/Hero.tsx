import BoutonPrivatiser from "@/components/BoutonPrivatiser";

export function Hero() {
  return (
    <section className="sticky top-0 z-0 h-[100svh] text-ivory">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          poster="/images/hero-homepage.webp"
        >
          <source src="/videos/assanabel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1c1814]/50" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1c1814]/75 via-[#1c1814]/35 to-[#1c1814]/45"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center overflow-visible px-5 pb-16 pt-28 text-center md:px-8">
        <p className="mb-5 text-[0.68rem] font-medium tracking-[0.32em] text-champagne/90 uppercase">
          Depuis 1988 · Paris 14 · Alésia
        </p>
        <p className="font-display mb-4 text-[2.6rem] leading-none tracking-[0.14em] md:text-6xl lg:text-[4.25rem]">
          ASSANABEL
        </p>
        <h1 className="font-display mb-6 max-w-2xl text-xl leading-snug text-balance md:text-2xl lg:text-[1.85rem]">
          Assanabel, le restaurant libanais de Paris depuis 1988
        </h1>
        <p className="font-display mb-8 max-w-md text-lg text-champagne italic md:text-xl">
          Une table. Mille histoires à partager.
        </p>
        <p className="mb-10 max-w-lg text-[0.95rem] leading-relaxed text-ivory/85 md:text-base">
          Depuis 1988, l’art de recevoir à la libanaise : mezzeh à partager,
          grillades soignées, hospitalité chaleureuse au cœur d’Alésia.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <BoutonPrivatiser href="/devis" tone="terre">
            Réserver votre événement
          </BoutonPrivatiser>
          <BoutonPrivatiser href="/privatisation" tone="clair">
            Privatiser
          </BoutonPrivatiser>
        </div>
        <p className="mt-8 text-sm text-ivory/70">
          <a
            id="commander"
            href="https://www.restaurant-assanabel.com/commande-en-ligne/"
            className="text-champagne underline decoration-champagne/35 underline-offset-4 hover:decoration-champagne"
          >
            Commander en ligne
          </a>
        </p>
      </div>
    </section>
  );
}
