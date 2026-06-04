# Data Model

## Product

```ts
export type ProductPriority = "featured" | "standard";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  priority: ProductPriority;
  claim: string;
  description: string;
  idealFor: string[];
  benefits: string[];
  highlights: string[];
  image: string;
  ctaLabel: string;
};
```

## Products seed

```ts
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
      "Maggiore controllo dell’incasso",
      "Installazione semplice",
    ],
    highlights: [
      "Compatta",
      "Personalizzabile",
      "Ideale fino a piccoli volumi",
    ],
    image: "/images/products/vne-minicash.webp",
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
    image: "/images/products/vne-virtuo-4.webp",
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
    image: "/images/products/vne-cash-2-2.webp",
    ctaLabel: "Scopri Cash 2.2",
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
      "Sicurezza dell’incasso",
      "Continuità operativa",
    ],
    highlights: ["Modulare", "Grandi volumi", "Solida"],
    image: "/images/products/vne-cash-4-2.webp",
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
      "Riduzione code e colli di bottiglia",
    ],
    highlights: ["Top di gamma", "Alti flussi", "Modulare"],
    image: "/images/products/vne-cash-6-2.webp",
    ctaLabel: "Scopri Cash 6.2",
  },
];
```
