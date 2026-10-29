import type { Metadata } from "next";
import { Suspense } from "react";
import { DevisWizard } from "@/components/devis/DevisWizard";

export const metadata: Metadata = {
  title: "Demande de devis | Traiteur & privatisation Assanabel",
  description:
    "Composez votre devis Assanabel en quelques étapes : traiteur libanais ou privatisation du restaurant à Paris 14.",
  alternates: { canonical: "/devis" },
  robots: { index: false, follow: true },
};

function DevisFallback() {
  return (
    <div className="devis" aria-busy="true">
      <div className="devis-main">
        <p className="devis-chapter" style={{ marginTop: "4rem" }}>
          Chargement du parcours…
        </p>
      </div>
    </div>
  );
}

export default function DevisPage() {
  return (
    <Suspense fallback={<DevisFallback />}>
      <DevisWizard />
    </Suspense>
  );
}
