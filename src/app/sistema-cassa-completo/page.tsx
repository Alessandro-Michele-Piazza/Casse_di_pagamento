import type { Metadata } from "next";
import { CompleteSystem } from "@/components/sections/CompleteSystem";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Sistema cassa completo con VNE, touch e KeepUp Smart",
  "Sistema cassa completo con cassa automatica rendiresto, terminale touch Custom, misuratore fiscale, software KeepUp Smart e assistenza.",
  "/sistema-cassa-completo",
);

export default function SistemaCassaCompletoPage() {
  return (
    <>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Soluzione integrata
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-white">
            Un unico referente per cassa automatica, touch, fiscale e software.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Progettiamo il punto cassa completo con componenti coerenti,
            installazione e assistenza. L&apos;obiettivo non è vendere una
            macchina, ma rendere più controllato il flusso operativo.
          </p>
        </div>
      </section>
      <CompleteSystem />
      <BenefitsGrid />
      <CtaBand title="Vuoi sostituire o riorganizzare il punto cassa?" />
    </>
  );
}
