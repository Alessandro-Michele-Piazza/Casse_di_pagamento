import Link from "next/link";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Vuoi capire quale soluzione conviene alla tua attività?",
  text = "Raccontaci punto vendita, volumi e obiettivi: ti aiutiamo a scegliere modello, sistema cassa e formula commerciale.",
}: CtaBandProps) {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-normal">{title}</h2>
          <p className="mt-3 text-base leading-7 text-slate-200">{text}</p>
        </div>
        <Link
          href="/contatti"
          className="inline-flex min-h-12 items-center justify-center rounded bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-500"
        >
          Parla con un consulente
        </Link>
      </div>
    </section>
  );
}
