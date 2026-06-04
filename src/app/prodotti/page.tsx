import type { Metadata } from "next";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Prodotti VNE: MiniCash, Virtuo 4, Cash 2.2, Cash 4.2 e Cash 6.2",
  "Catalogo casse automatiche VNE per piccoli, medi e grandi volumi di contante. Scopri modelli e soluzioni per il punto cassa.",
  "/prodotti",
);

export default function ProdottiPage() {
  return (
    <>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Catalogo
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-white">
            Casse automatiche VNE per ogni volume di contante.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Confronta i modelli e richiedi una consulenza per scegliere la
            configurazione più adatta al tuo punto vendita.
          </p>
        </div>
      </section>
      <ProductHighlights showAll />
      <CtaBand />
    </>
  );
}
