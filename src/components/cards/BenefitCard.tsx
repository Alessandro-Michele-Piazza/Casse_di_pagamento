import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function BenefitCard({ title, text, icon: Icon }: BenefitCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex size-11 items-center justify-center rounded bg-slate-950 text-white">
        <Icon size={21} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}
