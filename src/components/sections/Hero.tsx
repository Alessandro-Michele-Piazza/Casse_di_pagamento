import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image = "/media/immagine_header.webp",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,.88)_44%,rgba(2,6,23,.35)_100%)]" />
      </div>
      <div className="relative mx-auto grid min-h-165 max-w-7xl content-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.75fr] lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              {primaryCta.label} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="grid content-end gap-3 lg:justify-end">
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
            <ShieldCheck className="text-blue-300" aria-hidden="true" />
            <p className="mt-3 text-2xl font-black">Incasso protetto</p>
            <p className="mt-1 text-sm leading-6 text-slate-200">
              Meno contante maneggiato, meno differenze in chiusura.
            </p>
          </div>
          <div className="rounded-lg border border-blue-300/30 bg-blue-500 p-5 text-white shadow-2xl">
            <Calculator aria-hidden="true" />
            <p className="mt-3 text-2xl font-black">Noleggio operativo</p>
            <p className="mt-1 text-sm leading-6">
              Formula all-inclusive, salvo approvazione finanziaria. Prezzi IVA
              esclusa dove presenti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
