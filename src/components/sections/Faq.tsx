import { faqs } from "@/data/faq";

export function Faq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-normal text-slate-950">
          Domande frequenti
        </h2>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
