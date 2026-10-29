"use client";

import { useEffect, useRef } from "react";

type PageKey = "privatisation" | "traiteur" | "contact" | "apropos" | "confiance";

/** Chaque page charge son module d'interactions à la demande (code issu des maquettes site-html). */
const LOADERS: Record<PageKey, () => Promise<{ default: (root: HTMLElement) => () => void }>> = {
  privatisation: () => import("@/lib/maison/privatisation"),
  traiteur: () => import("@/lib/maison/traiteur"),
  contact: () => import("@/lib/maison/contact"),
  apropos: () => import("@/lib/maison/apropos"),
  confiance: () => import("@/lib/maison/confiance"),
};

/**
 * Conteneur des pages « maison » : applique le CSS des maquettes (classes `.pg` + `.page-…`),
 * affiche le curseur et la navigation par chapitres, puis démarre les interactions de la page.
 * Le contenu (`children`) reste rendu côté serveur.
 */
export function MaisonPage({
  page,
  className,
  children,
}: {
  page: PageKey;
  className: string;
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let stop: (() => void) | undefined;
    let cancelled = false;
    LOADERS[page]().then((m) => {
      if (!cancelled && rootRef.current) stop = m.default(rootRef.current);
    });
    return () => {
      cancelled = true;
      stop?.();
    };
  }, [page]);

  return (
    <div ref={rootRef} className={`pg ${className}`}>
      <div className="cursor" id="cursor" aria-hidden="true">
        <span></span>
      </div>
      <nav className="chapters" id="chapters" aria-label="Chapitres de la page"></nav>
      {children}
    </div>
  );
}
