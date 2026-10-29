import { ZENCHEF } from "@/lib/integrations";

type Props = {
  className?: string;
  /** Hauteur du cadre (défaut ~720px) */
  height?: number;
};

/**
 * Module de réservation Zenchef embarqué (iframe) — non utilisé : parcours événement via `/devis`.
 * Couleur primaire = terre cuite du site.
 */
export function ZenchefEmbed({ className, height = 720 }: Props) {
  return (
    <div
      className={
        className ??
        "overflow-hidden border border-[#1c1814]/10 bg-white shadow-[0_18px_50px_rgba(28,24,20,0.08)]"
      }
    >
      <iframe
        title="Réserver une table chez Assanabel — Zenchef"
        src={ZENCHEF.bookingUrl}
        className="block w-full border-0"
        style={{ height }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="payment *"
      />
    </div>
  );
}
