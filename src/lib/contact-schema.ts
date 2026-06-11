import { z } from "zod"

import { testPhoneNumber } from "./phone"

// Champs optionnels modélisés comme chaînes (vide = non renseigné) pour que le
// type d'entrée corresponde aux valeurs du formulaire (TanStack standard schema).
export const contactSchema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis"),
  nom: z.string().trim().min(1, "Nom requis"),
  organisation: z.string().trim(),
  email: z
    .string()
    .trim()
    .min(1, "Email requis")
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Email invalide"),
  telephone: z
    .string()
    .trim()
    .refine((value) => !value || testPhoneNumber(value), "Numéro invalide"),
  remarque: z.string().trim(),
})

export type ContactInput = z.infer<typeof contactSchema>
