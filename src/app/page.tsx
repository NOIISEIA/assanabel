import Image from "next/image";
import Link from "next/link";
import BoutonPrivatiser from "@/components/BoutonPrivatiser";
import { CustomCursor } from "@/components/CustomCursor";
import { ExperienceMaisonBand } from "@/components/ExperienceMaisonBand";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[0.68rem] font-medium tracking-[0.24em] text-bronze uppercase">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Hero />

      <Reveal>
        <ExperienceMaisonBand />
      </Reveal>

      {/* La Carte */}
      <section className="relative z-10 bg-ivory px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
              <Image
                src="/images/resto-plat.webp"
                alt="Houmous Assanabel en lumière tamisée"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel>La Carte · Les saveurs du Liban</SectionLabel>
              <h2 className="font-display mb-6 text-3xl leading-tight md:text-4xl">
                Le goût du partage, au centre de la table
              </h2>
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
                <p>
                  La cuisine libanaise se raconte d’abord à plusieurs. Un houmous
                  onctueux, des feuilles de vigne délicatement roulées, des
                  salades fraîches, des mezzeh chauds et froids que l’on découvre
                  au rythme des conversations.
                </p>
                <p>
                  Puis viennent les grillades, les parfums d’épices, les herbes
                  fraîches et les recettes qui traversent les générations. Chaque
                  préparation trouve sa place dans un ensemble généreux, où les
                  couleurs répondent aux saveurs.
                </p>
                <p>
                  Pour un déjeuner en semaine, nos formules du midi invitent à
                  une pause gourmande. Le soir, la table s’étire volontiers
                  autour d’un assortiment à partager.
                </p>
              </div>
              <div className="mt-8">
                <BoutonPrivatiser href="/la-carte" tone="terre">
                  Découvrir la carte
                </BoutonPrivatiser>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Traiteur */}
      <section className="relative z-10 isolate flex min-h-[100svh] items-center justify-center overflow-hidden text-ivory">
        <Image
          src="/images/traiteur-fond.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
          priority={false}
        />
        <div className="absolute inset-0 bg-[#1c1814]/58" aria-hidden />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-24 md:px-8 md:py-28">
          <Reveal>
            <div className="rounded-md bg-black/50 p-8 backdrop-blur-sm md:p-12">
              <p className="mb-3 text-[0.68rem] font-medium tracking-[0.24em] text-champagne uppercase">
                Traiteur · Vos événements
              </p>
              <h2 className="font-display mb-6 text-3xl leading-tight md:text-4xl lg:text-[2.6rem]">
                Traiteur libanais à Paris : l’art de recevoir, où vous voulez
              </h2>
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-white/90">
                <p>
                  Vous avez un lieu, des invités, une occasion à célébrer.
                  Assanabel apporte le goût du Liban à votre événement, avec une
                  cuisine pensée pour le partage et une présentation soignée.
                </p>
                <p>
                  Cocktail d’entreprise, déjeuner professionnel, buffet de
                  réception, anniversaire, réunion de famille ou célébration
                  privée : notre service de traiteur libanais à Paris s’adapte à
                  vos envies, au nombre de convives et à l’esprit de votre
                  rencontre.
                </p>
                <p>
                  Plateaux de mezzeh, buffets généreux, pièces à partager ou
                  prestations organisées sur votre site. Fort de plus de 25 ans
                  d’expérience dans l’événementiel, Assanabel accompagne
                  particuliers et entreprises — fraîcheur, générosité,
                  hospitalité.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-start gap-4">
                <BoutonPrivatiser href="/traiteur" tone="terre">
                  Demander un devis traiteur
                </BoutonPrivatiser>
                <BoutonPrivatiser href="/traiteur" tone="clair">
                  Découvrir notre service traiteur
                </BoutonPrivatiser>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Privatisation / Événements */}
      <section className="relative z-10 bg-ivory px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div className="flex min-w-0 flex-col">
              <SectionLabel>
                Privatisation · Recevoir chez Assanabel
              </SectionLabel>
              <h2 className="font-display mb-6 text-3xl leading-tight md:text-4xl">
                Privatisation de restaurant libanais à Paris : votre réception
                chez nous
              </h2>
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
                <p>
                  Certaines occasions méritent un lieu où l’on se sent
                  immédiatement accueilli. Chez Assanabel, nous ouvrons les
                  portes de notre maison à vos événements privés et
                  professionnels, au cœur du 14e arrondissement.
                </p>
                <p>
                  Pour un mariage intimiste, un anniversaire, un dîner
                  d’entreprise, un séminaire ou une réception familiale, nous
                  vous accompagnons dans le choix d’un format adapté à votre
                  projet.
                </p>
                <p>
                  Selon vos besoins et les disponibilités, envisagez la
                  privatisation d’une salle, de la terrasse ou du restaurant dans
                  son ensemble. Un cadre chaleureux, porté par les saveurs
                  libanaises et un service attentionné.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <BoutonPrivatiser href="/privatisation" tone="terre">
                  Privatiser le restaurant
                </BoutonPrivatiser>
                <Link
                  href="/privatisation"
                  className="inline-flex items-center text-[0.78rem] font-semibold tracking-[0.12em] text-bronze-deep uppercase no-underline underline decoration-bronze/40 underline-offset-4"
                >
                  Découvrir nos espaces de privatisation à Paris
                </Link>
              </div>
            </div>

            {/* Même hauteur que la colonne texte : fond cover sur la cellule grid */}
            <div
              className="min-h-[280px] bg-cover bg-center lg:min-h-0"
              style={{ backgroundImage: "url(/images/plat-poisson.webp)" }}
              role="img"
              aria-label="Poisson grillé Assanabel — cuisine libanaise"
            />
          </div>
        </Reveal>
      </section>

      {/* Bandeau hospitalité */}
      <section className="relative z-10 isolate flex min-h-[100svh] items-center justify-center overflow-hidden text-center text-ivory">
        <Image
          src="/images/hospitalite-salle.webp"
          alt="Ambiance Assanabel — hospitalité et partage à Paris"
          fill
          sizes="100vw"
          quality={92}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <Reveal className="relative mx-auto max-w-5xl px-5 py-20 md:px-8">
          <p className="font-display whitespace-nowrap text-white text-[clamp(1.35rem,5vw,3.5rem)] leading-[1.15] tracking-tight">
            Les plus belles tables sont celles qui rassemblent.
          </p>
          <blockquote className="mx-auto mt-10 max-w-2xl">
            <p className="font-display relative px-6 text-[clamp(1.05rem,2.2vw,1.45rem)] leading-relaxed text-champagne italic md:px-10">
              <span
                className="pointer-events-none absolute -top-3 left-0 font-display text-5xl leading-none text-champagne/45 not-italic md:-left-2 md:text-6xl"
                aria-hidden
              >
                “
              </span>
              Un plat que l’on partage, une place que l’on fait à un invité, une
              conversation qui se prolonge. Chez Assanabel, l’hospitalité
              libanaise se vit dans ces gestes simples depuis 1988.
              <span
                className="pointer-events-none ml-1 align-[-0.35em] font-display text-4xl leading-none text-champagne/45 not-italic md:text-5xl"
                aria-hidden
              >
                ”
              </span>
            </p>
          </blockquote>
        </Reveal>
      </section>

      {/* Ancrage local */}
      <section className="relative z-10 bg-ivory px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Paris 14 · Quartier Alésia</SectionLabel>
            <h2 className="font-display mb-6 text-3xl leading-tight md:text-4xl">
              Votre adresse libanaise au cœur du 14e arrondissement
            </h2>
            <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
              <p>
                À quelques pas du métro Alésia, Assanabel accueille Parisiens,
                habitués du quartier et visiteurs de passage au 6 rue d’Alésia.
              </p>
              <p>
                Notre restaurant à Alésia se prête aussi bien à un déjeuner
                entre collègues qu’à un dîner en famille, une soirée entre amis
                ou un rendez-vous professionnel. On y vient pour retrouver les
                saveurs du Liban, découvrir de nouveaux mezzeh ou simplement
                profiter d’une table où prendre son temps.
              </p>
              <p>
                Facilement accessible depuis Denfert-Rochereau et les quartiers
                voisins, notre maison réunit repas au restaurant, réception sur
                place et prestation traiteur — la même attention portée à la
                cuisine, au service et au plaisir d’être ensemble.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <BoutonPrivatiser href="/devis" tone="clair">
                Réserver votre événement
              </BoutonPrivatiser>
              <Link
                href="/privatisation"
                className="inline-flex items-center text-[0.78rem] font-semibold tracking-[0.12em] text-bronze-deep uppercase no-underline underline decoration-bronze/40 underline-offset-4"
              >
                Organiser une réception chez Assanabel
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
