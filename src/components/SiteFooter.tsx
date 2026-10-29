import Link from "next/link";
import { CurrentYear } from "@/components/CurrentYear";
import { SocialLinks } from "@/components/SocialLinks";

const COMMANDER_URL = "https://www.restaurant-assanabel.com/commande-en-ligne/";

const COLUMNS = [
  {
    title: "Restaurant",
    links: [
      { href: "/la-carte", label: "La carte" },
      { href: "/devis", label: "Réserver votre événement" },
      { href: COMMANDER_URL, label: "Commander en ligne", external: true },
    ],
  },
  {
    title: "Recevoir",
    links: [
      { href: "/privatisation", label: "Privatisation" },
      { href: "/traiteur", label: "Traiteur" },
      { href: "/nos-evenements", label: "Nos événements" },
    ],
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-[0.66rem] font-bold tracking-[0.24em] text-champagne uppercase">{children}</h2>;
}

/** Footer du site (Server Component) : marque, liens, coordonnées, réseaux sociaux animés, mentions. */
export function SiteFooter() {
  const link = "text-ivory/80 no-underline transition-colors hover:text-champagne";
  return (
    <footer className="site-footer relative z-10 bg-[#1b1f1c] pt-16 pb-24 text-ivory/80">
      <div className="mx-auto max-w-[76rem] px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-title mb-3 inline-block text-[1.45rem] tracking-[0.22em] text-ivory no-underline">
              ASSANABEL
            </Link>
            <p className="max-w-[18rem] text-[0.92rem]">Cuisine libanaise d’exception à Paris 14, depuis 1988.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <Heading>{col.title}</Heading>
              <ul className="grid gap-2 text-[0.92rem]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {"external" in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className={link}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Heading>Contact</Heading>
            <ul className="grid gap-2 text-[0.92rem]">
              <li>6 rue d’Alésia, 75014 Paris</li>
              <li>
                <a href="tel:+33142798686" className={link}>
                  01 42 79 86 86
                </a>
              </li>
              <li>
                <a href="mailto:contact@restaurant-assanabel.com" className={link}>
                  contact@restaurant-assanabel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-12 gap-y-7 border-t border-ivory/10 pt-10">
          <div>
            <Heading>Nos réseaux sociaux</Heading>
            <p className="font-display max-w-[24rem] text-[1.25rem] leading-snug text-ivory/85">
              Suivez la vie de la maison : les tables, les plats, les coulisses.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-ivory/10 pt-6 text-[0.78rem] text-ivory/50">
          <span>
            © <CurrentYear /> Assanabel
          </span>
          <Link href="/politique-de-confidentialite" className="text-ivory/50 no-underline hover:text-champagne">
            Politique de confidentialité
          </Link>
          <Link href="/mentions-legales" className="text-ivory/50 no-underline hover:text-champagne">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
