import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Assistenza casse automatiche e sistemi cassa",
  "Installazione, configurazione e assistenza per casse automatiche VNE, sistemi touch Custom e software KeepUp Smart.",
  "/assistenza",
);

export default function AssistenzaPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Assistenza
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-slate-950">
            Installazione e supporto tecnico da un unico referente.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seguiamo configurazione, avvio operativo e assistenza secondo gli
            accordi commerciali e tecnici definiti in proposta.
          </p>
        </div>
      </section>
      <CtaBand title="Hai bisogno di assistenza o vuoi pianificare un'installazione?" />
    </>
  );
}
