import type { Product } from "@/types";

const productImage = "/media/immagine_header.webp";

export const products: Product[] = [
  {
    slug: "vne-minicash",
    name: "VNE MiniCash",
    shortName: "MiniCash",
    priority: "featured",
    claim: "La cassa automatica compatta per piccoli volumi di contante.",
    description:
      "Soluzione compatta pensata per attività con volumi contenuti e necessità di automatizzare incasso e resto senza occupare troppo spazio.",
    idealFor: [
      "Bar",
      "Piccoli negozi",
      "B&B",
      "Retail leggero",
      "Attività con banco ridotto",
    ],
    benefits: [
      "Ingombro ridotto",
      "Riduzione errori di resto",
      "Maggiore controllo dell'incasso",
      "Installazione semplice",
    ],
    highlights: ["Compatta", "Personalizzabile", "Ideale per piccoli volumi"],
    image: productImage,
    ctaLabel: "Scopri MiniCash",
  },
  {
    slug: "vne-virtuo-4",
    name: "VNE Virtuo 4",
    shortName: "Virtuo 4",
    priority: "featured",
    claim: "Cassa automatica rendiresto per punti vendita moderni.",
    description:
      "Soluzione rendiresto per automatizzare il pagamento e migliorare sicurezza, igiene e velocità del punto cassa.",
    idealFor: ["Bar", "Tabacchi", "Panifici", "Macellerie", "Retail"],
    benefits: [
      "Automazione del resto",
      "Più sicurezza sul contante",
      "Meno contatto diretto con il denaro",
      "Esperienza di pagamento più ordinata",
    ],
    highlights: [
      "Rendiresto",
      "Punto cassa ordinato",
      "Ottimo equilibrio investimento/benefici",
    ],
    image: productImage,
    ctaLabel: "Scopri Virtuo 4",
  },
  {
    slug: "vne-cash-2-2",
    name: "VNE Cash 2.2",
    shortName: "Cash 2.2",
    priority: "featured",
    claim:
      "Soluzione compatta ed efficiente per flussi di cassa medio-piccoli.",
    description:
      "Cassa automatica VNE indicata per attività che vogliono fare un salto di qualità nella gestione del contante.",
    idealFor: ["Ristoranti", "Pizzerie", "Farmacie", "Negozi", "Servizi"],
    benefits: [
      "Gestione più efficiente del pagamento",
      "Controllo operativo",
      "Riduzione differenze di cassa",
      "Maggiore sicurezza",
    ],
    highlights: ["Versatile", "Scalabile", "Adatta a molte attività"],
    image: productImage,
    ctaLabel: "Scopri Cash 2.2",
  },
  {
    slug: "vne-pos-integrato",
    name: "VNE POS Integrato",
    shortName: "POS Integrato",
    priority: "standard",
    claim: "Pagamento elettronico e contante in un flusso più ordinato.",
    description:
      "Soluzione pensata per integrare il punto cassa con pagamenti tracciati e gestione più fluida dell'operatività quotidiana.",
    idealFor: ["Retail", "Farmacie", "Tabacchi", "Ristorazione"],
    benefits: [
      "Flusso di pagamento più lineare",
      "Meno passaggi manuali",
      "Esperienza cliente più rapida",
    ],
    highlights: ["Integrabile", "Operativo", "Omnicanale"],
    image: productImage,
    ctaLabel: "Scopri POS Integrato",
  },
  {
    slug: "vne-cash-4-2",
    name: "VNE Cash 4.2",
    shortName: "Cash 4.2",
    priority: "standard",
    claim: "Cassa modulare per flussi importanti di contante.",
    description:
      "Soluzione modulare pensata per attività con maggiore intensità di transazioni e necessità di robustezza operativa.",
    idealFor: [
      "Supermercati",
      "Retail strutturato",
      "Farmacie grandi",
      "Ho.Re.Ca.",
    ],
    benefits: [
      "Gestione di flussi elevati",
      "Configurazione modulare",
      "Sicurezza dell'incasso",
      "Continuità operativa",
    ],
    highlights: ["Modulare", "Grandi volumi", "Solida"],
    image: productImage,
    ctaLabel: "Scopri Cash 4.2",
  },
  {
    slug: "vne-cash-6-2",
    name: "VNE Cash 6.2",
    shortName: "Cash 6.2",
    priority: "standard",
    claim: "La soluzione VNE per grandi volumi di transazioni in contanti.",
    description:
      "Cassa automatica modulare per punti vendita ad alto flusso, con gestione avanzata di banconote e monete.",
    idealFor: [
      "Supermercati",
      "Catene retail",
      "Sale ad alto traffico",
      "Punti vendita strutturati",
    ],
    benefits: [
      "Ideale per grandi volumi",
      "Gestione avanzata banconote",
      "Alta capacità operativa",
      "Riduzione code",
    ],
    highlights: ["Top di gamma", "Alti flussi", "Modulare"],
    image: productImage,
    ctaLabel: "Scopri Cash 6.2",
  },
];

export const featuredProducts = products.filter(
  (product) => product.priority === "featured",
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
