import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProductCardProps = {
  name: string;
  claim: string;
  image: string;
  href: string;
  badges?: string[];
  featured?: boolean;
};

export function ProductCard({
  name,
  claim,
  image,
  href,
  badges = [],
  featured = false,
}: ProductCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <Link href={href} className="block">
        <div className="relative aspect-4/3 bg-slate-100">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            {featured && (
              <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold uppercase text-white">
                In evidenza
              </span>
            )}
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600"
              >
                {badge}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{claim}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            Dettagli soluzione <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
