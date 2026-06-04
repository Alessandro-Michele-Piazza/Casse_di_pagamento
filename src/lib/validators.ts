import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Inserisci nome e cognome"),
  company: z.string().min(2, "Inserisci il nome dell'azienda"),
  phone: z.string().min(6, "Inserisci un telefono valido"),
  email: z.string().email("Inserisci un'email valida"),
  city: z.string().min(2, "Inserisci comune o provincia"),
  businessType: z.string().min(2, "Indica il tipo di attività"),
  message: z.string().optional(),
  privacy: z
    .boolean()
    .refine((value) => value === true, "Devi accettare l'informativa privacy"),
});

export type LeadPayload = z.infer<typeof leadSchema>;
