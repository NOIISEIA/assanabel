import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Noto_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RecevoirFab } from "@/components/RecevoirFab";
import { ZenchefWidget } from "@/components/ZenchefWidget";
import { PartooWidget } from "@/components/PartooWidget";
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
  title: "Restaurant libanais Paris 14 | Assanabel depuis 1988",
  description:
    "Assanabel, restaurant libanais à Paris depuis 1988. Cuisine généreuse, traiteur libanais et privatisation au cœur du quartier Alésia.",
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
        <SiteFooter />
        <RecevoirFab />
        <ZenchefWidget />
        <PartooWidget />
      </body>
    </html>
  );
}
