import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Noto_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HideOnDevis } from "@/components/HideOnDevis";
import { RecevoirFab } from "@/components/RecevoirFab";
import { ZenchefWidget } from "@/components/ZenchefWidget";
import { PartooWidget } from "@/components/PartooWidget";
import { SEO } from "@/lib/seo";
import "./globals.css";
import "@/styles/maison-pages.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

/** Titres : Cinzel (équivalent libre de Trajan Pro, cité dans la charte) */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SEO.home.title,
    template: "%s",
  },
  description: SEO.home.description,
  metadataBase: new URL("https://www.restaurant-assanabel.com"),
  openGraph: {
    title: SEO.home.title,
    description: SEO.home.description,
    locale: "fr_FR",
    type: "website",
    siteName: "Assanabel",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
  },
  // Favicon / apple-icon : fichiers app/icon.svg, app/apple-icon.png, app/favicon.ico
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${ebGaramond.variable} ${cinzel.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <SiteHeader />
        {/* isolate : confiné le sticky/vidéo du hero sous le header (z-200) dès le 1er paint */}
        <main className="relative z-0 isolate flex-1">{children}</main>
        <HideOnDevis>
          <SiteFooter />
        </HideOnDevis>
        <RecevoirFab />
        <ZenchefWidget />
        <PartooWidget />
      </body>
    </html>
  );
}
