# Implementation Notes

## SSR e performance

Le pagine prodotto possono essere generate staticamente perché i contenuti cambiano raramente.
Usare `generateStaticParams` per gli slug prodotto.

## Immagini

Usare `next/image`.
Formato preferito: WebP o AVIF.
Le immagini dei prodotti vanno inserite in:

```txt
/public/images/products/
```

## Design

Ispirazione dal materiale grafico già prodotto:

- Forte contrasto nero/blu/bianco
- Box prezzo/canone ben visibili
- Focus su “formula all-inclusive”
- Visual prodotto grande
- CTA chiare

## Attenzione legale/commerciale

- Specificare “prezzi IVA esclusa” dove presenti
- Specificare “salvo approvazione finanziaria”
- Evitare promesse tecniche non confermate dal produttore
- Separare contenuti ufficiali prodotto da claim commerciali
