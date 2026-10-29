/** Contenu extrait de l’export WP — page `/la-carte` (slug legacy). */

export type CarteItem = {
  name: string;
  desc?: string;
};

export type CarteSection = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: CarteItem[];
  align?: "left" | "right" | "center";
};

export const carteIntro = {
  title: "La carte",
  eyebrow: "Restaurant · Sur place",
  lead: "Nous vous proposons des spécialités riches en saveurs et en goût dans un cadre original et authentique.",
  body: "Une table composée de mezzés variés, de brochettes et grillades, de poissons aux épices et d’une salade rafraîchissante — un large choix de spécialités libanaises.",
  conceptTitle: "Le concept de la table",
  conceptBody:
    "Ce menu est conçu pour l’ensemble de la table. Les Gastronomes : assortiment de Mezzeh en entrée, suivi d’un présentoir de Grillade.",
  pdfUrl: "/carte/carte-finale.pdf",
};

/** Bandes de page — cartes décalées sur fond ivory (hero seul en photo) */
export const carteBands: {
  id: string;
  label: string;
  background?: string;
  dark?: boolean;
  sectionIds: string[];
}[] = [
  {
    id: "mezzeh",
    label: "Mezzehs & entrées",
    sectionIds: [
      "classiques-froids",
      "salades",
      "tartares",
      "chauds",
      "croustillants",
    ],
  },
  {
    id: "signatures",
    label: "Plats signés",
    sectionIds: ["incontournables", "noblesse"],
  },
  {
    id: "grillades",
    label: "Grillades & poissons",
    sectionIds: ["grillades", "poissons"],
  },
  {
    id: "desserts-midi",
    label: "Desserts & pause midi",
    sectionIds: ["desserts", "midi"],
  },
];

export const carteSections: CarteSection[] = [
  {
    id: "classiques-froids",
    title: "Les classiques froids",
    subtitle: "Nos Mezzehs · Entrées",
    align: "left",
    items: [
      {
        name: "Hommos",
        desc: "Purée de pois chiches à la crème de sésame",
      },
      {
        name: "Hommos Assanabel",
        desc: "Purée de pois chiches, crème de sésame, citron et persil",
      },
      {
        name: "Chankliche",
        desc: "Salade de fromage de chèvre parfumé au thym",
      },
      {
        name: "Tabouleh",
        desc: "Persil haché, blé concassé, tomates, oignons, huile d’olive et citron",
      },
      {
        name: "Moutabal",
        desc: "Caviar d’aubergines rôties à la crème de sésame et au citron",
      },
      {
        name: "Moussaka",
        desc: "Ratatouille d’aubergines aux pois chiches à la sauce tomate",
      },
      {
        name: "Warak Enab",
        desc: "Feuilles de vignes farcies, riz, tomates, oignons",
      },
      {
        name: "Baba Ghanouge",
        desc: "Aubergines grillées, tomates, persil, oignons, poivrons et citron",
      },
      {
        name: "Labneh Beltoum",
        desc: "Fromage blanc battu à l’ail et à la menthe",
      },
    ],
  },
  {
    id: "salades",
    title: "Les salades d’exception",
    align: "right",
    items: [
      {
        name: "Salade Orientale Mixte",
        desc: "Salades, tomates, concombres, poivrons, oignons, radis, persil au citron et à l’huile d’olive",
      },
      {
        name: "Fatouche",
        desc: "Crudités, huile d’olive, pain grillé, épice de thym rouge",
      },
    ],
  },
  {
    id: "tartares",
    title: "Tartare de viande libanais",
    align: "left",
    items: [
      {
        name: "Kebbé Nayé",
        desc: "Tartare de bœuf au blé concassé",
      },
      {
        name: "Kafta Nayée",
        desc: "Viande de bœuf crue hachée, oignons et persil",
      },
      {
        name: "Habra Nayée",
        desc: "Purée de viande d’agneau crue",
      },
    ],
  },
  {
    id: "chauds",
    title: "Les classiques chauds",
    align: "right",
    items: [
      {
        name: "Patata Hara",
        desc: "Pomme de terre, ail, citron et coriandre",
      },
      {
        name: "Sawdet Djaj",
        desc: "Foie de volaille sauté au citron et à l’ail",
      },
      {
        name: "Jawanah Betoum",
        desc: "Ailes de poulet, à l’ail et au citron",
      },
    ],
  },
  {
    id: "croustillants",
    title: "Les croustillants",
    align: "left",
    items: [
      {
        name: "Sambousek Jehbneh",
        desc: "Beignets farcis au fromage de brebis",
      },
      {
        name: "Sambousek Lahmeh",
        desc: "Beignets farcis à la viande de bœuf",
      },
      {
        name: "Kebbeh Krass",
        desc: "Poires de viande au blé concassé farcies à la viande hachée",
      },
      {
        name: "Fatayer",
        desc: "Chaussons d’épinards au thym rouge",
      },
      {
        name: "Rekak",
        desc: "Feuilletés croustillants au fromage",
      },
      {
        name: "Falafel",
        desc: "Beignets de fèves et pois chiches aux épices",
      },
    ],
  },
  {
    id: "incontournables",
    title: "Les incontournables",
    align: "right",
    items: [
      {
        name: "Hommos Lahmeh",
        desc: "Mousse de pois chiches, crème de sésame et viande crue",
      },
      {
        name: "Soujouk",
        desc: "Saucisses de bœuf épicées au citron",
      },
      {
        name: "Halloumi grillé",
        desc: "Fromage de brebis grillé et au thym",
      },
      {
        name: "Fatteh Assanabel",
        desc: "Viande, aubergines, pain et yaourt",
      },
      {
        name: "Kellage",
        desc: "Pain farci au fromage halloumi et tomates grillées",
      },
      {
        name: "Arayess",
        desc: "Pain farci à la viande épicée grillée",
      },
    ],
  },
  {
    id: "noblesse",
    title: "La noblesse occidentale",
    align: "left",
    items: [
      {
        name: "Crevettes croquantes",
        desc: "Crevettes croustillantes et sauce tartare",
      },
      {
        name: "Hommos Royal à la Truffe",
        desc: "L’original Hommos à la Truffe — création Assanabel 2020",
      },
      {
        name: "Labneh des Ancêtres",
        desc: "Aubergine, fromage, poivron aux noix et à la menthe",
      },
      {
        name: "Bassalieh",
        desc: "Viande d’agneau avec oignons poêlés aux épices",
      },
    ],
  },
  {
    id: "grillades",
    title: "Les grillades",
    subtitle: "Nos plats signés · Viande",
    align: "right",
    items: [
      {
        name: "Grillade Assanabel",
        desc: "Trio de brochettes d’agneau, poulet et viande hachée",
      },
      {
        name: "Kafta Méchoui",
        desc: "Brochettes de tartare de viande au persil et à l’oignon épicé",
      },
      {
        name: "Lahem Méchoui",
        desc: "Brochettes d’agneau parfumées aux épices",
      },
      {
        name: "Chiche Taouk",
        desc: "Brochettes de blanc de poulet marinées au citron et à l’ail",
      },
      {
        name: "Djaj Méchoui",
        desc: "Demi-poulet désossé et mariné",
      },
      {
        name: "Charahat Assanabel",
        desc: "Filet de bœuf au citron et champignons",
      },
      {
        name: "Chawarma Lahmeh",
        desc: "Lamelles de viande de bœuf marinées",
      },
      {
        name: "Casteletta",
        desc: "Côtes d’agneau assaisonnées et grillées",
      },
      {
        name: "Kharouf Mehchi",
        desc: "Agneau confit aux épices douces, riz oriental",
      },
    ],
  },
  {
    id: "poissons",
    title: "Plats à base de poisson",
    align: "left",
    items: [
      {
        name: "Daurade Royale",
        desc: "Daurade grillée avec sa sauce sésame",
      },
      {
        name: "Gambas grillées",
        desc: "Parfumées aux épices",
      },
    ],
  },
  {
    id: "desserts",
    title: "Nos desserts",
    subtitle: "Les desserts de la maison",
    align: "right",
    items: [
      {
        name: "Karabige",
        desc: "Petits fours sablés au cœur de pistache, crème meringuée",
      },
      {
        name: "Baklawa mixte",
        desc: "Feuilletés et pâtisseries libanaises",
      },
      {
        name: "Halawa Bel Jebné",
        desc: "Rouleau de fromage garni de crème de lait, sirop et pistaches",
      },
      {
        name: "Mouhalabieh",
        desc: "Flan à la fleur d’oranger, sirop et éclats de pistache",
      },
      {
        name: "Fruits de saison",
        desc: "Présentoir de fruits frais à partager (minimum 2 personnes)",
      },
      {
        name: "Osmallié",
        desc: "Cheveux d’ange, crème de lait, sirop de sucre",
      },
      {
        name: "Glaces",
        desc: "2 boules — Rose et Achta",
      },
    ],
  },
  {
    id: "midi",
    title: "La pause du midi",
    subtitle: "Trois menus adaptés à vos envies",
    align: "center",
    items: [
      {
        name: "Formule de table à partager",
        desc: "Deux mezzehs Assanabel (froids et chauds) + plat du jour ou deux brochettes (viande et poulet)",
      },
      {
        name: "Menu Découverte",
        desc: "Mezzehs variés (hoummous, moutabal, tabouleh / falafel, kebbeh, rekak) + brochette de poulet + mouhalabieh ou salade de fruits",
      },
      {
        name: "Menu du jour",
        desc: "Plat du jour ou brochettes (viande et poulet) + café ou thé gourmand",
      },
    ],
  },
];
