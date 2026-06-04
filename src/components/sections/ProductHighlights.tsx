import { featuredProducts, products } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";

type ProductHighlightsProps = {
  showAll?: boolean;
};

export function ProductHighlights({ showAll = false }: ProductHighlightsProps) {
  const items = showAll ? products : featuredProducts;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Gamma VNE
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
            Prodotti in evidenza per automatizzare il contante.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Dalla cassa compatta al sistema modulare: scegliamo il modello in
            base a volumi, spazio banco e processo operativo.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              claim={product.claim}
              image={product.image}
              href={`/prodotti/${product.slug}`}
              badges={product.highlights}
              featured={product.priority === "featured"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
