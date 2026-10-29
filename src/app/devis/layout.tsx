import type { ReactNode } from "react";
import { DevisChrome } from "@/components/devis/DevisChrome";
import "@/styles/devis.css";

/** Parcours devis immersif (chrome masqué par pathname ; overflow via data-devis). */
export default function DevisLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DevisChrome />
      {children}
    </>
  );
}