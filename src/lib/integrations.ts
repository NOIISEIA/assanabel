/** Intégrations tierces — IDs publics (widgets client). */

/** Couleur primaire site (terre cuite), sans # — format Zenchef */
export const BRAND_HEX = "996849";
export const BRAND_HEX_HASH = `#${BRAND_HEX}`;

export const ZENCHEF = {
  restaurantId: "357665",
  sdkSrc: "https://sdk.zenchef.com/v1/sdk.min.js",
  /** Module embarqué Zenchef (legacy — parcours événement via /devis) */
  bookingUrl: `https://bookings.zenchef.com/results?rid=357665&primaryColor=${BRAND_HEX}&lang=fr&hidelang=1`,
  lang: "fr",
  color: BRAND_HEX,
  position: "right" as const,
};

export const PARTOO = {
  token: "8bb9b7e7-d55a-480d-b46f-781ff4baeb4a",
  scriptSrc: "https://cdn.partoo.co/widget/prod/latest.js",
  color: BRAND_HEX_HASH,
  country: "FR",
  policyUrl:
    "https://app.partoo.co/privacy/messaging/b14f17c5-74a4-4820-8cd6-850869123693?lang=fr",
  avatarUrl:
    "https://cdn.partoo.co/avatar/prod/8bb9b7e7-d55a-480d-b46f-781ff4baeb4a/37ebf889-db2a-42dd-b766-fdea30af24da.png",
  icon: "message_logo_icon",
  /** Au-dessus du FAB Zenchef « Réserver une table » (bas-droite) */
  desktopMarginBottom: "88px",
  mobileMarginBottom: "96px",
  desktopMarginRight: "20px",
  mobileMarginRight: "16px",
};
