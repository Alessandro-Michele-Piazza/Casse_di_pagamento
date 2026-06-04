"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/meta-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-semibold tracking-tight text-primary">
            CASSE AUTOMATICHE
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={isActive ? "text-primary" : "hover:text-primary"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark sm:inline-flex"
          >
            Richiedi demo
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 lg:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-slate-200 bg-white lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`rounded-md px-3 py-3 text-base font-semibold ${
                  isActive
                    ? "bg-[#FFF7ED] text-primary"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/demo"
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 font-semibold text-white shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            Richiedi demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
