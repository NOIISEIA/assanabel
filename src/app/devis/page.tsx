import type { Metadata } from "next";
import { Suspense } from "react";
import { DevisWizard } from "@/components/devis/DevisWizard";

import { pageMetadata, SEO } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(SEO.devis, {
  canonical: "/devis",
  robots: { index: false, follow: true },
});

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
