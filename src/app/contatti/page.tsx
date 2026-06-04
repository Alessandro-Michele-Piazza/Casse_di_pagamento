import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contatti e preventivo casse automatiche",
  "Richiedi consulenza gratuita, preventivo o sopralluogo per casse automatiche VNE e sistema cassa completo.",
  "/contatti",
);

export default function ContattiPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Contatti
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-normal text-slate-950">
            Richiedi una consulenza gratuita.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Compila il form per ricevere una proposta su acquisto, noleggio
            operativo, installazione o sopralluogo tecnico-commerciale.
          </p>
          <div className="mt-8 rounded-lg bg-slate-950 p-6 text-white">
            <p className="font-bold">Area operativa</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Catania, Giarre, Sicilia orientale, Sicilia. Calabria valutabile
              su progetto.
            </p>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
