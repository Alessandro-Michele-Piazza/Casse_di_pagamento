import Link from "next/link";
import { navItems } from "@/data/navigation";
import { products } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xl font-black">Casse Automatiche SPLIT</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Soluzioni VNE, sistema cassa touch, misuratore fiscale, KeepUp Smart
            e assistenza per Catania, Sicilia orientale e Sicilia.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
            Navigazione
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
            Prodotti
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {products.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/prodotti/${product.slug}`}
                  className="hover:text-white"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
            Contatti
          </h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>SPLIT ® | GL S.r.l.s.</p>
            <a
              className="block hover:text-white"
              href="mailto:info@splitweb.it"
            >
              info@splitweb.it
            </a>
            <a className="block hover:text-white" href="https://splitweb.it">
              www.splitweb.it
            </a>
            <Link className="block hover:text-white" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
       <a href="https://www.splitweb.it"> © 2026 SPLIT | GL S.r.l.s. Tutti i diritti riservati.  |  Realizzato da SPLIT Web Agency</a>
      </div>
    </footer>
  );
}
