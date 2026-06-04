import type { Metadata } from "next";

// import "../../css/homepage.css";
import Link from "next/link";
import { pageSeoMap, siteUrl, buildAlternates } from "@/lib/meta-data";

const homeSeo = pageSeoMap["/"];

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: buildAlternates("/"),
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Casse Automatiche",
    url: siteUrl,
    email: "info@splitweb.it",
    parentOrganization: {
      "@type": "Organization",
      name: "SPLIT ® | GL S.r.l.s.",
      url: "https://splitweb.it",
    },
  },
];

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <div className="sfondo_homepage flex items-center justify-center">
          <h1 className="text-5xl font-bold testo_bianco ">
            Benvenuti su Casse Automatiche
          </h1>
        </div>
      </div>
    </>
  );
}
