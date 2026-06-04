import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Casse automatiche rendiresto per attività commerciali",
  "Casse automatiche VNE per ridurre errori di resto, proteggere l'incasso e velocizzare il pagamento in bar, retail, farmacie e ristorazione.",
  "/casse-automatiche",
);

export default function CasseAutomatichePage() {
  return (
    <>
      <Hero
        eyebrow="Cassa automatica rendiresto"
        title="Più sicurezza e meno errori nella gestione del contante."
        subtitle="Automatizziamo incasso e resto con soluzioni VNE configurate sulle esigenze reali del punto vendita."
        primaryCta={{ label: "Prenota sopralluogo", href: "/contatti" }}
        secondaryCta={{ label: "Vedi prodotti", href: "/prodotti" }}
      />
      <BenefitsGrid />
      <ProductHighlights showAll />
      <CtaBand />
    </>
  );
}
