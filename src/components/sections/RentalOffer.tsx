import Link from "next/link";

export function RentalOffer() {
  return (
    <section className="bg-white py-16 text-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Noleggio operativo
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal">
            Formula all-inclusive, zero pensieri.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Puoi dotarti di una soluzione completa senza immobilizzare capitale,
            con assistenza e garanzia incluse secondo configurazione
            contrattuale.
          </p>
          <p className="mt-3 text-sm text-slate-400 italic">
            Salvo approvazione finanziaria. Prezzi IVA esclusa dove presenti.
          </p>
        </div>
        <Link
          href="/noleggio-operativo"
          className="inline-flex min-h-12 items-center justify-center rounded bg-slate-950 px-6 text-sm font-bold text-white  hover:-translate-y-1 active:translate-y-0.5 transition"
        >
          Richiedi preventivo noleggio
        </Link>
      </div>
    </section>
  );
}
