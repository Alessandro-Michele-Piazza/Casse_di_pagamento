import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/casse-automatiche",
  "/sistema-cassa-completo",
  "/noleggio-operativo",
  "/noleggio-operativo-casse-automatiche",
  "/prodotti",
  "/software/keepup-smart",
  "/settori",
  "/assistenza",
  "/faq",
  "/contatti",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...products.map((product) => `/prodotti/${product.slug}`),
    ...industries.map((industry) => `/settori/${industry.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
