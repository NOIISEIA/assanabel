import type { ReactNode } from "react";
import { DevisChrome } from "@/components/devis/DevisChrome";
import "@/styles/devis.css";

/** Parcours devis immersif (chrome site masqué via data-devis / .devis). */
export default function DevisLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DevisChrome />
      {children}
    </>
  );
}