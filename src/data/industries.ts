import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "bar",
    name: "Bar",
    claim: "Incassi più rapidi nelle ore di punta e meno errori al banco.",
    needs: [
      "Gestione contante veloce",
      "Igiene nel passaggio denaro",
      "Banco ordinato",
    ],
  },
  {
    slug: "ristoranti",
    name: "Ristoranti e pizzerie",
    claim:
      "Un punto cassa completo per sala, asporto e chiusure più controllate.",
    needs: [
      "Chiusure più semplici",
      "Riduzione code",
      "Controllo dell'incasso",
    ],
  },
  {
    slug: "tabacchi",
    name: "Tabacchi",
    claim:
      "Automazione del resto per attività ad alto numero di micro-transazioni.",
    needs: ["Molte transazioni", "Sicurezza contante", "Operatività continua"],
  },
  {
    slug: "farmacie",
    name: "Farmacie",
    claim:
      "Pagamento ordinato, meno contatto con il denaro e maggiore sicurezza.",
    needs: ["Flussi costanti", "Privacy al banco", "Igiene"],
  },
  {
    slug: "panifici",
    name: "Panifici e alimentari",
    claim: "Resto automatico e cassa touch per velocizzare il servizio.",
    needs: ["Ore di punta", "Scontrino rapido", "Meno manipolazione denaro"],
  },
  {
    slug: "retail",
    name: "Retail e minimarket",
    claim:
      "Soluzioni scalabili per negozi, minimarket e punti vendita strutturati.",
    needs: ["Scalabilità", "Reportistica", "Assistenza tecnica"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
