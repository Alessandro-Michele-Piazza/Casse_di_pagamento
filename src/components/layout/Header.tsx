"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import logo from "@/assets/logo.svg";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="SPLIT Casse Automatiche"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo.src} alt="logo_azienda" className="size-10 object-contain" />

          <span className="leading-tight">
            <span className="block text-base font-black tracking-normal text-slate-950">
              Casse Automatiche
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              SPLIT
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex"
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "text-blue-700" : "hover:text-blue-700"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contatti"
            className="hidden min-h-11 items-center justify-center rounded bg-blue-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-500 sm:inline-flex"
          >
            Richiedi preventivo
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded border border-slate-300 bg-white text-slate-950 lg:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-slate-200 bg-white lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav
          className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6"
          aria-label="Navigazione mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded bg-blue-600 px-5 font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Richiedi preventivo
          </Link>
        </nav>
      </div>
    </header>
  );
}
