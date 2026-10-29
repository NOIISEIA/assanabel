export type ProjetType = "traiteur" | "privatisation";

export type DevisStepId =
  | "projet"
  | "occasion"
  | "date"
  | "composition"
  | "coordonnees";

export const DEVIS_STEPS: { id: DevisStepId; label: string; short: string }[] = [
  { id: "projet", label: "Votre projet", short: "Projet" },
  { id: "occasion", label: "L'occasion", short: "Occasion" },
  { id: "date", label: "Date & convives", short: "Date" },
  { id: "composition", label: "Composition", short: "Composition" },
  { id: "coordonnees", label: "Coordonnées", short: "Contact" },
];

export const OCCASIONS = [
  "Anniversaire",
  "Mariage",
  "Baptême",
  "Fiançailles",
  "Pot de départ",
  "After work",
  "Cocktail corporate",
  "Séminaire",
  "Assemblée générale",
  "Lancement de produit",
  "Team building",
  "Déjeuner d'affaires",
  "Dîner d'entreprise",
  "Réunion",
  "Inauguration",
  "Fête d'équipe",
  "Soirée privée",
  "Réception familiale",
] as const;

export const PLAGES = [
  { id: "dejeuner", label: "Brunch / déjeuner" },
  { id: "journee", label: "Journée (9h–17h)" },
  { id: "afterwork", label: "After-work (18h–22h)" },
  { id: "diner", label: "Dîner / soirée" },
  { id: "autre", label: "Autre plage horaire" },
] as const;

export const FORMULES_TRAITEUR = [
  {
    id: "plateaux",
    label: "Plateaux-repas",
    desc: "Déjeuners d'affaires, réunions, tournages — frais et livrés sur place.",
    image: "/site/images/brochettes-poulet.webp",
  },
  {
    id: "buffets",
    label: "Buffets",
    desc: "Mezzeh, grillades et douceurs pour petits et grands groupes.",
    image: "/site/images/buffet-festif.webp",
  },
  {
    id: "cocktails",
    label: "Cocktails & finger food",
    desc: "Pièces à partager, verrines et mignardises — conversation d'abord.",
    image: "/site/images/cocktail.webp",
  },
  {
    id: "service-table",
    label: "Service à table",
    desc: "Menu assis composé par nos chefs, service de l'installation au dessert.",
    image: "/site/images/table-mezzeh.webp",
  },
  {
    id: "livraison",
    label: "Livraison & logistique",
    desc: "Île-de-France, 7j/7 — y compris dernière minute ou retrait.",
    image: "/site/images/plateau-chaud.webp",
  },
] as const;

/** Assanabel : un seul lieu, trois modalités d’occupation — pas un catalogue de salles. */
export const ESPACES_PRIVATISATION = [
  {
    id: "restaurant",
    label: "Toute la maison",
    desc: "Privatisation complète — banquet, séminaire, soirée sans limites.",
    meta: "Paris 14 · jusqu'à 120 pers.",
    image: "/site/images/salle-panorama.webp",
  },
  {
    id: "salle",
    label: "La salle",
    desc: "Espace privé avec serveur dédié — famille, amis ou professionnels.",
    meta: "Paris 14 · privatisation partielle",
    image: "/site/images/salle-rose.webp",
  },
  {
    id: "terrasse",
    label: "La terrasse",
    desc: "Air libre au cœur d'Alésia — apéritifs et réceptions en belle saison.",
    meta: "Paris 14 · selon météo",
    image: "/site/images/terrasse.webp",
  },
] as const;

export type Civilite = "madame" | "monsieur" | "autre";

export type DevisState = {
  projet: ProjetType | null;
  occasion: string | null;
  occasionLibre: string;
  dateSouhaitee: string;
  dateAlternative: string;
  invites: number;
  plage: string | null;
  formules: string[];
  espace: string | null;
  message: string;
  civilite: Civilite;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  codePostal: string;
  consent: boolean;
};

export const INITIAL_DEVIS: DevisState = {
  projet: null,
  occasion: null,
  occasionLibre: "",
  dateSouhaitee: "",
  dateAlternative: "",
  invites: 30,
  plage: null,
  formules: [],
  espace: null,
  message: "",
  civilite: "madame",
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  societe: "",
  codePostal: "",
  consent: false,
};

export function formatDateFr(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function buildDevisMailBody(s: DevisState): string {
  const occasion = s.occasionLibre.trim() || s.occasion || "—";
  const formules =
    s.projet === "traiteur"
      ? s.formules
          .map((id) => FORMULES_TRAITEUR.find((f) => f.id === id)?.label ?? id)
          .join(", ") || "—"
      : ESPACES_PRIVATISATION.find((e) => e.id === s.espace)?.label ?? "—";
  const plage = PLAGES.find((p) => p.id === s.plage)?.label ?? "—";
  return [
    `Projet : ${s.projet === "traiteur" ? "Traiteur" : "Privatisation"}`,
    `Occasion : ${occasion}`,
    `Date souhaitée : ${s.dateSouhaitee || "—"}`,
    `Date alternative : ${s.dateAlternative || "—"}`,
    `Invités : ${s.invites}`,
    `Plage : ${plage}`,
    s.projet === "traiteur" ? `Formules : ${formules}` : `Espace : ${formules}`,
    s.message.trim() ? `Message :\n${s.message.trim()}` : "",
    "",
    `Civilité : ${s.civilite}`,
    `Nom : ${s.prenom} ${s.nom}`,
    `Email : ${s.email}`,
    `Téléphone : ${s.telephone}`,
    s.societe ? `Société : ${s.societe}` : "",
    s.codePostal ? `Code postal : ${s.codePostal}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
