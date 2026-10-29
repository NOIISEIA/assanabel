"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ZENCHEF } from "@/lib/integrations";

function hideZenchefDom(hide: boolean) {
  const nodes = document.querySelectorAll<HTMLElement>(
    'iframe[src*="zenchef"], iframe[class*="ZC_"], [class*="ZC_sdk"], [id*="zenchef"]',
  );
  nodes.forEach((el) => {
    if (hide) {
      el.style.setProperty("display", "none", "important");
      el.style.setProperty("visibility", "hidden", "important");
      el.style.setProperty("pointer-events", "none", "important");
    } else {
      el.style.removeProperty("display");
      el.style.removeProperty("visibility");
      el.style.removeProperty("pointer-events");
    }
  });
}

/**
 * Widget flottant Zenchef (bas-droite), une seule fois par page.
 * Masqué sur `/devis` pour ne pas couvrir Continuer / Envoyer.
 */
export function ZenchefWidget() {
  const pathname = usePathname();
  const onDevis = pathname?.startsWith("/devis") ?? false;

  useEffect(() => {
    hideZenchefDom(onDevis);
    if (!onDevis) return;

    const obs = new MutationObserver(() => hideZenchefDom(true));
    obs.observe(document.body, { childList: true, subtree: true });
    return () => {
      obs.disconnect();
      hideZenchefDom(false);
    };
  }, [onDevis]);

  if (onDevis) return null;

  return (
    <>
      <div
        className="zc-widget-config"
        data-restaurant={ZENCHEF.restaurantId}
        data-color={ZENCHEF.color}
        data-lang={ZENCHEF.lang}
        data-position={ZENCHEF.position}
        hidden
        aria-hidden
      />
      <Script
        id="zenchef-sdk"
        src={ZENCHEF.sdkSrc}
        strategy="afterInteractive"
      />
    </>
  );
}
