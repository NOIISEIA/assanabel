import type { Metadata } from "next";

/**
 * Titles (≤ 60) et meta descriptions (≤ 155) SEO Assanabel.
 * Mots-clés locaux : restaurant libanais Paris 14, Alésia, traiteur, privatisation.
 */
export const SEO = {
  home: {
    title: "Restaurant libanais Paris 14 | Assanabel depuis 1988",
    description:
      "Assanabel, restaurant libanais à Paris 14 depuis 1988. Mezzeh, grillades et hospitalité à Alésia. Traiteur et privatisation.",
  },
  laCarte: {
    title: "Carte restaurant libanais Paris 14 | Assanabel",
    description:
      "Mezzeh, grillades, poissons et desserts : découvrez la carte d'Assanabel, restaurant libanais à Paris 14 (Alésia) depuis 1988.",
  },
  traiteur: {
    title: "Traiteur libanais Paris | Assanabel",
    description:
      "Traiteur libanais à Paris et en Île-de-France : cocktails, buffets, plateaux-repas. Plus de 25 ans d'événementiel. Demandez un devis.",
  },
  privatisation: {
    title: "Privatisation restaurant Paris 14 | Assanabel",
    description:
      "Privatisez la salle, la terrasse ou tout le restaurant Assanabel à Paris 14 : mariage, séminaire, dîner d'entreprise. Devis.",
  },
  aPropos: {
    title: "À propos | Restaurant libanais Assanabel Paris 14",
    description:
      "Depuis 1988 à Alésia, Assanabel cultive la cuisine libanaise à Paris 14 : héritage familial, savoir-faire et art de recevoir.",
  },
  confiance: {
    title: "Ils nous font confiance | Assanabel Paris",
    description:
      "Entreprises, institutions et grandes écoles confient leurs réceptions à Assanabel : cocktails, séminaires et buffets à Paris.",
  },
  contact: {
    title: "Contact | Restaurant libanais Assanabel Paris 14",
    description:
      "Contactez Assanabel, 6 rue d'Alésia, 75014 Paris. Réservation, traiteur, privatisation. Tél. 01 42 79 86 86.",
  },
  devis: {
    title: "Demande de devis | Traiteur & privatisation Assanabel",
    description:
      "Composez votre devis Assanabel : traiteur libanais ou privatisation du restaurant à Paris 14, en quelques étapes.",
  },
  notFound: {
    title: "Page introuvable | Assanabel Paris",
    description:
      "Cette page n'existe pas. Retrouvez Assanabel, restaurant libanais à Paris 14, depuis l'accueil ou la carte.",
  },
} as const;

type SeoEntry = { title: string; description: string };

export function pageMetadata(
  entry: SeoEntry,
  opts?: { canonical?: string; robots?: Metadata["robots"] },
): Metadata {
  return {
    title: entry.title,
    description: entry.description,
    ...(opts?.canonical
      ? { alternates: { canonical: opts.canonical } }
      : {}),
    ...(opts?.robots ? { robots: opts.robots } : {}),
    openGraph: {
      title: entry.title,
      description: entry.description,
      locale: "fr_FR",
      type: "website",
      siteName: "Assanabel",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  };
}
