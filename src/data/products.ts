import type { Product } from "@/types";
import cash2_2_image from "../assets/images/cash2.2.webp";
import cash4_2_image from "../assets/images/cash4.2.webp";
import cash6_2_image from "../assets/images/cash6.2-1.webp";
import virtuo4_image from "../assets/images/virtuo4.webp";

const productImage = "/media/immagine_header.webp";

export const products: Product[] = [
  {
    slug: "vne-minicash",
    name: "VNE MiniCash",
    shortName: "MiniCash",
    priority: "featured",
    claim: "La cassa automatica compatta per piccoli volumi di contante.",
    description:
      "La cassa automatica più compatta della famiglia VNE. Da utilizzare in tutti quegli esercizi commerciali in cui il volume delle transazioni in contanti non superi le 70 al giorno e, grazie alle sue dimensioni ridotte e alla forma lineare, si integra facilmente in qualsiasi arredamento. Il pannello frontale è completamente personalizzabile.",
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
    image: cash2_2_image,
    ctaLabel: "Scopri MiniCash",
  },
  {
    slug: "vne-virtuo-4",
    name: "VNE Virtuo 4",
    shortName: "Virtuo 4",
    priority: "featured",
    claim: "Cassa automatica rendiresto per punti vendita moderni.",
    description:
      "Accetta tutte le banconote con inserimento uno ad uno e dà resto con 4 tipi di banconote erogandone una alla volta. Accetta tutte le monete introducibili simultaneamente anche di tagli misti e dà resto con tutte le monete simultaneamente in tagli misti.",
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
    image: cash2_2_image,
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
      "La più compatta cassa automatica VNE orizzontale. Grazie al suo modulo monete estremamente potente, abbinato ad un riciclatore di banconote capace di riciclare fino a 4 tagli, posizionato anch’esso in posizione orizzontale, si addice perfettamente a quelle attività che necessitano una cassa che salvi gli spazi in altezza e si sviluppi quindi in profondità. Elegante e ergonomicamente perfetta, si integra benissimo in ogni tipo di arredamento.",
    idealFor: ["Ristoranti", "Pizzerie", "Farmacie", "Negozi", "Servizi"],
    benefits: [
      "Gestione più efficiente del pagamento",
      "Controllo operativo",
      "Riduzione differenze di cassa",
      "Maggiore sicurezza",
    ],
    highlights: ["Versatile", "Scalabile", "Adatta a molte attività"],
    image: cash2_2_image,
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
      "La cassa modulare che accetta banconote a pacchetto ed eroga banconote a pacchetto  in grado di gestire importanti flussi di banconote sia in pagamento che in resto abbinata ad un riciclatore di monete potentissimo che si sviluppa in posizione orizzontale. Questa combinazione consente alla cassa di gestire grandi volumi di pagamenti in contanti. Il modulo di banconote è autoportante a terra ed integrabile nel bancone del punto cassa mentre il modulo moneta può essere messo supra a colonna. La sua eleganza e semplicità del design, la rende compatibile con ogni arredamento.",
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
    image: cash4_2_image,
    ctaLabel: "Scopri Cash 4.2",
  },
  {
    slug: "vne-cash-6-2",
    name: "VNE Cash 6.2",
    shortName: "Cash 6.2",
    priority: "standard",
    claim: "La soluzione VNE per grandi volumi di transazioni in contanti.",
    description:
      "Questa cassa automatica gestisce grandi flussi di contante combinando un modulo banconote a terra, integrabile nel bancone, che accetta ed eroga a pacchetto, con un potente riciclatore di monete a sviluppo orizzontale posizionabile a colonna. Il design elegante e compatto la rende ideale per qualsiasi punto cassa ad alto traffico, adattandosi perfettamente a ogni stile di arredamento.",
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
    image: cash6_2_image,
    ctaLabel: "Scopri Cash 6.2",
  },
];

export const featuredProducts = products.filter(
  (product) => product.priority === "featured",
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
