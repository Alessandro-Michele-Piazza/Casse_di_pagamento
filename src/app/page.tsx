import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { CompleteSystem } from "@/components/sections/CompleteSystem";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { RentalOffer } from "@/components/sections/RentalOffer";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Casse Automatiche Rendiresto e Sistemi Cassa Completi | SPLIT",
  "Automatizza il punto cassa con casse automatiche VNE, sistema touch, misuratore fiscale e software KeepUp Smart. Noleggio operativo, installazione e assistenza.",
  "/",
);

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd(), faqJsonLd()]),
        }}
      />
      <Hero
        eyebrow="Casse automatiche rendiresto + sistema cassa completo"
        title="Automatizza il punto cassa. Incassa meglio, lavora più veloce."
        subtitle="Soluzioni VNE con sistema cassa touch, misuratore fiscale e software KeepUp Smart. Installazione, configurazione, assistenza e formula noleggio operativo all-inclusive."
        primaryCta={{ label: "Richiedi preventivo", href: "/contatti" }}
        secondaryCta={{ label: "Scopri i modelli", href: "/prodotti" }}
      />
      <ProductHighlights />
      <CompleteSystem />
      <BenefitsGrid />
      <RentalOffer />
      <Industries />
      <Process />
      <Faq />
      <CtaBand />
    </>
  );
}
