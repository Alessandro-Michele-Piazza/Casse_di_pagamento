# UI Components

## Hero

Props:

```ts
type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: string;
};
```

## ProductCard

Props:

```ts
type ProductCardProps = {
  name: string;
  claim: string;
  image: string;
  href: string;
  badges?: string[];
  featured?: boolean;
};
```

## LeadForm

Campi minimi:

- Nome e cognome
- Azienda
- Telefono
- Email
- Comune / Provincia
- Tipo attività
- Messaggio
- Privacy checkbox

## Form validation

Usare Zod.

```ts
import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  city: z.string().min(2),
  businessType: z.string().min(2),
  message: z.string().optional(),
  privacy: z.literal(true),
});
```
