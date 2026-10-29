import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "terre" | "clair";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  compact?: boolean;
  /** terre cuite #996849 ou beige clair — même hover cadre décalé */
  tone?: Tone;
};

const CSS = `
.assanabel-btn-wrap{position:relative;display:inline-block;vertical-align:top;margin:0 10px 10px 0;overflow:visible}
.assanabel-btn-wrap::after{content:"";position:absolute;inset:0;border:1px solid var(--cta);opacity:0;pointer-events:none;z-index:0;transition:transform .3s ease,opacity .3s ease}
.assanabel-btn{position:relative;z-index:1;display:inline-flex!important;align-items:center;justify-content:center;padding:18px 36px!important;background:var(--cta)!important;background-color:var(--cta)!important;color:var(--cta-ink)!important;font-weight:600!important;font-size:14px!important;letter-spacing:.14em!important;text-transform:uppercase!important;text-decoration:none!important;border:none!important;border-radius:0!important;cursor:pointer;transition:transform .3s ease,background-color .3s ease,color .3s ease}
.assanabel-btn--compact{padding:10px 22px!important;font-size:12px!important}
.assanabel-btn-wrap--terre{--cta:#996849;--cta-ink:#ffffff;--cta-hover:#a87852}
.assanabel-btn-wrap--clair{--cta:#e6d4b5;--cta-ink:#1c1814;--cta-hover:#f0e6d4}
.assanabel-btn-wrap:hover .assanabel-btn,.assanabel-btn-wrap:focus-within .assanabel-btn{transform:translate(-4px,-4px);background:var(--cta-hover)!important;background-color:var(--cta-hover)!important}
.assanabel-btn-wrap:hover::after,.assanabel-btn-wrap:focus-within::after{transform:translate(8px,8px);opacity:1}
.assanabel-btn-wrap:active .assanabel-btn{transform:translate(0,0);background:var(--cta)!important}
.assanabel-btn-wrap:active::after{transform:translate(0,0);opacity:1}
@media (prefers-reduced-motion:reduce){.assanabel-btn,.assanabel-btn-wrap::after{transition:none}.assanabel-btn-wrap:hover .assanabel-btn,.assanabel-btn-wrap:focus-within .assanabel-btn{transform:none}}
`;

export default function BoutonPrivatiser({
  href,
  children,
  className,
  external,
  compact,
  tone = "terre",
}: Props) {
  const btnClass = [
    "assanabel-btn",
    compact ? "assanabel-btn--compact" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const wrapClass = `assanabel-btn-wrap assanabel-btn-wrap--${tone}`;

  const inner = external ? (
    <a
      href={href}
      className={btnClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <span className={wrapClass}>{inner}</span>
    </>
  );
}
