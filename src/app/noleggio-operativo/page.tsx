import type { Metadata } from "next";
import { RentalOffer } from "@/components/sections/RentalOffer";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Noleggio operativo casse automatiche",
  "Formula di noleggio operativo per casse automatiche VNE e sistemi cassa completi, con assistenza e garanzia secondo configurazione.",
  "/noleggio-operativo",
);

export default function NoleggioOperativoPage() {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Noleggio operativo
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal">
            Dotati di una soluzione completa senza immobilizzare capitale.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            La formula all-inclusive consente di pianificare il canone e
            includere assistenza e garanzia secondo contratto, previa
            approvazione finanziaria.
          </p>
        </div>
      </section>
      <RentalOffer />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            "Canone pianificabile",
            "Assistenza inclusa",
            "Soluzione scalabile",
          ].map((item) => (
            <article
              key={item}
              className="rounded-lg border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-black text-slate-950">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Configurazione da valutare su modello, accessori, installazione
                e servizi richiesti.
              </p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Richiedi una simulazione di noleggio operativo." />
    </>
  );
}
