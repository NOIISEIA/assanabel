import type { Metadata } from "next";
import PageIntrouvable from "@/components/PageIntrouvable";
import { pageMetadata, SEO } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(SEO.notFound, {
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return <PageIntrouvable />;
}
