"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PARTOO } from "@/lib/integrations";

function hidePartooDom(hide: boolean) {
  const nodes = document.querySelectorAll<HTMLElement>(
    '[class*="partoo"], [id*="partoo"], #partoo-messaging-widget',
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
 * Chat Partoo — injecté une fois, couleur terre cuite.
 * Masqué sur `/devis` pour laisser le footer du parcours accessible.
 */
export function PartooWidget() {
  const pathname = usePathname();
  const onDevis = pathname?.startsWith("/devis") ?? false;

  useEffect(() => {
    hidePartooDom(onDevis);
    if (onDevis) return;

    if (document.getElementById("partoo-messaging-widget")) return;

    const script = document.createElement("script");
    script.id = "partoo-messaging-widget";
    script.type = "module";
    script.src = PARTOO.scriptSrc;
    script.dataset.token = PARTOO.token;
    script.dataset.icon = PARTOO.icon;
    script.dataset.color = PARTOO.color;
    script.dataset.policyUrl = PARTOO.policyUrl;
    script.dataset.country = PARTOO.country;
    script.dataset.avatarImageUrl = PARTOO.avatarUrl;
    script.setAttribute("desktop-margin-bottom", PARTOO.desktopMarginBottom);
    script.setAttribute("mobile-margin-bottom", PARTOO.mobileMarginBottom);
    script.setAttribute("desktop-margin-right", PARTOO.desktopMarginRight);
    script.setAttribute("mobile-margin-right", PARTOO.mobileMarginRight);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [onDevis]);

  return null;
}
