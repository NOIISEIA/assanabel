import Image from "next/image";
import BoutonPrivatiser from "@/components/BoutonPrivatiser";

export function MaisonSection() {
  return (
    <div className="relative text-ivory">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-4 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-32 md:pt-8 lg:gap-16">
        <div>
          <p className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tight text-champagne/90">
            1988
          </p>
          <h2 className="font-display mt-4 max-w-lg text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
            Une maison, pas seulement une table.
          </h2>
          <div className="mt-8 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-ivory/80">
            <p>
              Tout commence par un héritage : une cuisine transmise, des gestes
              appris au fil des générations, une hospitalité ancrée dans la
              culture libanaise. Depuis 1988, Assanabel partage cette histoire à
              Paris, inspirée des traditions du Liban et des saveurs de la
              vallée de la Bekaa.
            </p>
            <p>
              Notre savoir-faire s’est nourri d’un parcours international, sans
              jamais perdre de vue l’essentiel : le goût juste, la générosité et
              le plaisir de recevoir. Dans notre restaurant libanais à Paris,
              l’élégance se vit sans cérémonie.
            </p>
            <p>
              Une table qui s’anime, des assiettes que l’on rapproche, une
              attention discrète portée à chacun. Une maison vivante, fidèle à
              ses origines et ouverte sur la ville.
            </p>
          </div>
          <div className="mt-10">
            <BoutonPrivatiser href="/a-propos" tone="clair">
              Découvrir l’histoire de la Maison
            </BoutonPrivatiser>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] md:block">
          <div className="absolute right-0 top-0 aspect-[3/4] w-[78%] overflow-hidden">
            <Image
              src="/images/facade-1.webp"
              alt="Façade Assanabel, rue d’Alésia"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 aspect-[4/5] w-[55%] overflow-hidden border-[6px] border-[#1c1814] shadow-2xl">
            <Image
              src="/images/resto-table-service.webp"
              alt="Table Assanabel — service et mezzeh"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
