const steps = [
  [
    "01",
    "Sopralluogo",
    "Analisi di banco, volumi, flussi e strumenti fiscali esistenti.",
  ],
  [
    "02",
    "Proposta",
    "Configurazione del sistema e valutazione acquisto o noleggio operativo.",
  ],
  [
    "03",
    "Installazione",
    "Montaggio, configurazione software e avvio del punto cassa.",
  ],
  [
    "04",
    "Assistenza",
    "Supporto tecnico e manutenzione secondo accordi contrattuali.",
  ],
];

export function Process() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl text-4xl font-black tracking-normal text-slate-950">
          Dal sopralluogo all&apos;assistenza: un processo chiaro.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-mono text-sm font-black text-blue-700">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
