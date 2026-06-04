import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Cassa automatica rendiresto VNE",
  "Sistema cassa touch Custom",
  "Misuratore fiscale / stampante fiscale",
  "Software gestionale KeepUp Smart",
  "Installazione, configurazione e assistenza",
];

export function CompleteSystem() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Sistema cassa completo
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal">
            Non solo cassa automatica: un punto cassa completo, pronto a
            lavorare.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Abbiniamo la cassa automatica rendiresto a un sistema cassa touch,
            misuratore fiscale e software KeepUp Smart, così il tuo punto
            vendita ha una soluzione integrata, installata e supportata da un
            unico referente.
          </p>
          <Link
            href="/sistema-cassa-completo"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-white px-6 text-sm font-bold text-slate-950 hover:bg-blue-100"
          >
            Vedi il sistema completo
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/15 bg-white/10 p-5"
            >
              <CheckCircle2 className="text-blue-300" aria-hidden="true" />
              <p className="mt-4 font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
