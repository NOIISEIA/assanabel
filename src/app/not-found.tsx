import type { Metadata } from "next";
import PageIntrouvable from "@/components/PageIntrouvable";

/** À copier vers src/app/not-found.tsx : page 404 du site (drôle, avec le jeu des cloches). */
export const metadata: Metadata = {
  title: "404 — Cette page a quitté la table | Assanabel",
  description: "Page introuvable. Soulevez une cloche pour retrouver votre chemin.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <PageIntrouvable />;
}
