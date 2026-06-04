import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { CtaBand } from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata(
    `Casse automatiche per ${industry.name}`,
    industry.claim,
    `/settori/${industry.slug}`,
  );
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Settore
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal">
            Casse automatiche per {industry.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {industry.claim}
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-500 hover:-translate-y-1 active:translate-y-0.5 transition"
          >
            Richiedi consulenza
          </Link>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {industry.needs.map((need) => (
            <article
              key={need}
              className="rounded-lg border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-black text-slate-950">{need}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Valutiamo processo, volumi e banco per proporre una
                configurazione realistica.
              </p>
            </article>
          ))}
        </div>
      </section>
      <ProductHighlights />
      <CtaBand title={`Vuoi una proposta per ${industry.name}?`} />
    </>
  );
}
