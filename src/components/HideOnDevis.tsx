"use client";

import { usePathname } from "next/navigation";

/** Masque le chrome site sur /devis (fiable au changement de route, sans CSS :has). */
export function HideOnDevis({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/devis")) return null;
  return children;
}
