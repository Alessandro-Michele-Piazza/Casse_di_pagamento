import type { Metadata } from "next";
import { Industries } from "@/components/sections/Industries";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Casse automatiche per bar, ristoranti, farmacie, tabacchi e retail",
  "Soluzioni cassa automatica rendiresto e sistema cassa completo per settori con alta gestione di contante.",
  "/settori",
);

export default function SettoriPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Settori
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-slate-950">
            Automazione del punto cassa per attività con contante quotidiano.
          </h1>
        </div>
      </section>
      <Industries />
      <CtaBand />
    </>
  );
}
