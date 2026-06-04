import { industries } from "@/data/industries";
import { IndustryCard } from "@/components/cards/IndustryCard";

export function Industries() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Settori serviti
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
            Soluzioni per attività che gestiscono contante ogni giorno.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              name={industry.name}
              claim={industry.claim}
              href={`/settori/${industry.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
