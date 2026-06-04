import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Software cassa KeepUp Smart",
  "KeepUp Smart per gestione del punto cassa, scontrino elettronico e attività commerciali con dispositivi Android compatibili.",
  "/software/keepup-smart",
);

export default function KeepUpSmartPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Software gestionale
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-slate-950">
            KeepUp Smart per un punto cassa semplice, fiscale e operativo.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Applicazione Android per piccoli ristoranti, bar-tabacchi, B&B,
            negozi, commercio e professionisti. È indicata per emissione dei
            nuovi scontrini elettronici e gestione del punto cassa su
            dispositivi compatibili.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {["Scontrino elettronico", "Gestione banco", "Sistema integrato"].map(
            (item) => (
              <article
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-black text-slate-950">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Configurazione da verificare in base a dispositivo, misuratore
                  fiscale e flusso operativo dell&apos;attività.
                </p>
              </article>
            ),
          )}
        </div>
      </section>
      <CtaBand title="Vuoi integrare KeepUp Smart con cassa automatica e touch?" />
    </>
  );
}
