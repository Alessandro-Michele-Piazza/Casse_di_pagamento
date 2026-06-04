import type { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "FAQ casse automatiche e sistemi cassa",
  "Risposte su integrazione fiscale, noleggio operativo, installazione, assistenza e scelta del modello VNE.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Faq />
      <CtaBand />
    </>
  );
}
