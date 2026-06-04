import {
  Banknote,
  Clock3,
  HandCoins,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BenefitCard } from "@/components/cards/BenefitCard";

const benefits = [
  {
    title: "Resto automatico",
    text: "Il cliente paga e riceve il resto senza passaggi manuali al banco.",
    icon: HandCoins,
  },
  {
    title: "Riduzione errori",
    text: "Meno differenze di cassa e più controllo nelle chiusure quotidiane.",
    icon: Banknote,
  },
  {
    title: "Maggiore sicurezza",
    text: "L'incasso resta protetto e il personale maneggia meno contante.",
    icon: ShieldCheck,
  },
  {
    title: "Più igiene",
    text: "Riduci il contatto diretto con banconote e monete durante il servizio.",
    icon: Sparkles,
  },
  {
    title: "Pagamenti rapidi",
    text: "Code più snelle nelle fasce di punta e banco più ordinato.",
    icon: Clock3,
  },
  {
    title: "Assistenza inclusa",
    text: "Installazione, configurazione e supporto tecnico da un unico referente.",
    icon: HeartHandshake,
  },
];

export function BenefitsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            ROI operativo
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
            Più controllo sul contante. Meno errori. Più tempo per vendere.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
