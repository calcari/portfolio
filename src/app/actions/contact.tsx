"use server"

import { Resend } from "resend"

import { contactSchema, type ContactInput } from "@/lib/contact-schema"
import { PortfolioContactEmail } from "@/emails/portfolio-contact"

const CONTACT_TO = "hello@franck.calcari.dev"

export type ContactResult = { ok: true } | { ok: false; error: string }

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: "Le formulaire contient des erreurs." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, error: "Service d'envoi non configuré." }
  }

  const data = parsed.data
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: CONTACT_TO,
      replyTo: data.email,
      subject: `Contact portfolio — ${data.prenom} ${data.nom}`,
      react: <PortfolioContactEmail {...data} />,
    })

    if (error) {
      return { ok: false, error: "L'envoi a échoué, réessayez plus tard." }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: "L'envoi a échoué, réessayez plus tard." }
  }
}
