import type { Metadata } from "next";
import type { Product } from "@/types";
import { faqs } from "@/data/faq";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.tuodominio.it";
export const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "SPLIT";

type CanonicalTarget = `/${string}` | `http://${string}` | `https://${string}`;

export function buildAlternates(
  canonical: CanonicalTarget,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical,
    languages: { it: canonical, "it-IT": canonical, "x-default": canonical },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: `/${string}` = "/",
): Metadata {
  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      locale: "it_IT",
      siteName: "Casse Automatiche SPLIT",
      images: [
        {
          url: "/media/immagine_header.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casse Automatiche Rendiresto e Sistemi Cassa Completi | SPLIT",
    template: "%s | SPLIT Casse Automatiche",
  },
  description:
    "Automatizza il punto cassa con casse automatiche VNE, sistema touch, misuratore fiscale e software KeepUp Smart.",
  icons: {
    icon: [{ url: "/favicon-split.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-split.svg",
  },
  alternates: buildAlternates("/"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Casse Automatiche SPLIT",
  },
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyName,
    url: siteUrl,
    email: process.env.LEAD_TO_EMAIL || "info@splitweb.it",
    areaServed: [
      "Catania",
      "Giarre",
      "Sicilia orientale",
      "Sicilia",
      "Calabria",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: "Casse automatiche rendiresto VNE e sistemi cassa completi",
    },
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    brand: { "@type": "Brand", name: "VNE" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      url: `${siteUrl}/prodotti/${product.slug}`,
    },
  };
}

export function faqJsonLd(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };
}
