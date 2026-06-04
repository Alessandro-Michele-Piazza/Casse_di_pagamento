import type { Metadata } from "next";

export const siteUrl = "https://url.it"; //TODO: inserire URL reale

type CanonicalTarget = `/${string}` | `http://${string}` | `https://${string}`;

export function buildAlternates(
  canonical: CanonicalTarget,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical,
    languages: {
      it: canonical,
      "it-IT": canonical,
      "x-default": canonical,
    },
  };
}

// TODO: definire i link reali e le relative label
export const navItems = [
  { label: "Link 1", href: "/funzionalita" },
  { label: "Link 2", href: "/comuni" },
  {
    label: "Link 3",
    href: "/ristorazione-collettiva",
  },
  {
    label: "Link 4",
    href: "/ristorazione-aziendale",
  },
  { label: "Link 5", href: "/ufficio-gare" },
  { label: "Link 6", href: "/integrazioni" },
  { label: "Link 7", href: "/risorse" },
];

// TODO: definire i MetaData reali
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casse Automatiche | Il tuo punto cassa informatizzato",
    template: "%s | Casse Automatiche",
  },
  description: "Casse Automatiche, soluzioni punto cassa informatizzato",
  alternates: buildAlternates("/"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Casse Automatiche",
  },
};

export const pageSeoMap = {
  "/": {
    searchIntent: "Cos'è Casse Automatiche e perche usarlo",
    primaryKeyword: "piattaforma punto cassa informatizzato",
    secondaryKeywords: [
      "software punto cassa",
      "gestione punto cassa digitale",
      "cabina di regia punto cassa",
    ],
    title: "Casse Automatiche | Il tuo punto cassa informatizzato",
    description:
      "Casse Automatiche: soluzioni punto cassa informatizzato per Comuni e gestori.",
    internalLinks: ["/software", "/ristorazione", "/integrazioni", "/demo"],
  },
};
