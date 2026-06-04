import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { products, getProduct } from "@/data/products";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(
    product.name,
    product.description,
    `/prodotti/${product.slug}`,
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(product),
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Prodotti", href: "/prodotti" },
              { name: product.name, href: `/prodotti/${product.slug}` },
            ]),
          ]),
        }}
      />
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              Cassa automatica VNE
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-normal">
              {product.name}
            </h1>
            <p className="mt-5 text-2xl font-bold text-blue-100">
              {product.claim}
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contatti"
                className="inline-flex min-h-12 items-center justify-center rounded bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-500"
              >
                Richiedi consulenza
              </Link>
              <Link
                href="/noleggio-operativo"
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/30 px-6 text-sm font-bold text-white hover:bg-white hover:text-slate-950"
              >
                Noleggio operativo
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-white/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <InfoList title="Ideale per" items={product.idealFor} />
          <InfoList title="Benefici" items={product.benefits} />
          <InfoList title="Specifiche commerciali" items={product.highlights} />
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black tracking-normal text-slate-950">
            Integrazione con sistema cassa touch e KeepUp Smart
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Ogni modello può essere inserito in un punto cassa completo con
            terminale touch Custom, misuratore fiscale, software gestionale e
            assistenza tecnica.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/sistema-cassa-completo"
              className="rounded bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              Sistema cassa completo
            </Link>
            <Link
              href="/software/keepup-smart"
              className="rounded bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-sm"
            >
              KeepUp Smart
            </Link>
            <Link
              href="/contatti"
              className="rounded bg-blue-600 px-4 py-3 text-sm font-bold text-white"
            >
              Contatti
            </Link>
          </div>
        </div>
      </section>
      <CtaBand
        title={`Vuoi capire se ${product.shortName} è il modello giusto?`}
      />
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-slate-700"
          >
            <CheckCircle2
              className="mt-0.5 shrink-0 text-blue-700"
              size={18}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
