import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IndustryCardProps = {
  name: string;
  claim: string;
  href: string;
};

export function IndustryCard({ name, claim, href }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 active:translate-y-0.5 transition"
    >
      <h3 className="text-lg font-bold text-slate-950">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{claim}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
        Soluzione per settore{" "}
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
