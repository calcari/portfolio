"use server"

import { Resend, type ErrorResponse } from "resend"

import {
  contactSubmitSchema,
  type ContactInput,
  type ContactSubmitInput,
} from "@/lib/contact-schema"
import { verifyRecaptchaToken } from "@/lib/recaptcha"
import { PortfolioContactConfirmationEmail } from "@/emails/portfolio-contact-confirmation"
import { PortfolioContactEmail } from "@/emails/portfolio-contact"

type SendStep = "notification-interne" | "confirmation-visiteur"

const DEFAULT_CONTACT_TO = "hello@franck.calcari.dev"

function contactFrom() {
  return process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>"
}

function contactTo() {
  return process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_TO
}

function contactReplyTo(data: ContactInput) {
  return `${data.prenom} ${data.nom} <${data.email}>`
}

function contactPlainText(data: ContactInput) {
  const lines = [
    "Nouveau message du portfolio",
    "",
    `Nom : ${data.prenom} ${data.nom}`,
    data.organisation ? `Organisation : ${data.organisation}` : null,
    `Email : ${data.email}`,
    data.telephone ? `Téléphone : ${data.telephone}` : null,
    data.remarque ? `\nRemarque :\n${data.remarque}` : null,
  ]

  return lines.filter(Boolean).join("\n")
}

function confirmationPlainText(data: ContactInput) {
  return [
    `Bonjour ${data.prenom},`,
    "",
    "Merci pour votre message via mon portfolio. Je reviendrai vers vous dès que possible.",
    "",
    "Franck Calcari",
  ].join("\n")
}

function logSendFailure(
  step: SendStep,
  error: ErrorResponse,
  context: Record<string, string>
) {
  console.error(`[contact] ${step}`, {
    ...context,
    resendMessage: error.message,
    resendName: error.name,
    statusCode: error.statusCode,
  })
}

function publicSendError(step: SendStep, error: ErrorResponse) {
  if (process.env.NODE_ENV === "development") {
    return `Échec (${step}) : ${error.message}`
  }

  return "L'envoi a échoué, réessayez plus tard."
}

export type ContactResult = { ok: true } | { ok: false; error: string }

export async function sendContact(
  input: ContactSubmitInput
): Promise<ContactResult> {
  const parsed = contactSubmitSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: "Le formulaire contient des erreurs." }
  }

  const captchaOk = await verifyRecaptchaToken(parsed.data.captchaToken)
  if (!captchaOk) {
    return {
      ok: false,
      error: "Vérification anti-robot échouée, réessayez.",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, error: "Service d'envoi non configuré." }
  }

  const { captchaToken: _captchaToken, ...data } = parsed.data
  const resend = new Resend(apiKey)
  const from = contactFrom()
  const to = contactTo()

  try {
    const { error: internalError } = await resend.emails.send({
      from,
      to,
      replyTo: contactReplyTo(data),
      subject: `Contact portfolio — ${data.prenom} ${data.nom} (${data.email})`,
      text: contactPlainText(data),
      react: <PortfolioContactEmail {...data} />,
    })

    if (internalError) {
      logSendFailure("notification-interne", internalError, { from, to })
      return {
        ok: false,
        error: publicSendError("notification-interne", internalError),
      }
    }

    const { error: confirmationError } = await resend.emails.send({
      from,
      to: data.email,
      replyTo: to,
      subject: "Votre message a bien été reçu",
      text: confirmationPlainText(data),
      react: (
        <PortfolioContactConfirmationEmail prenom={data.prenom} />
      ),
    })

    if (confirmationError) {
      logSendFailure("confirmation-visiteur", confirmationError, {
        from,
        to: data.email,
      })
      return {
        ok: false,
        error: publicSendError("confirmation-visiteur", confirmationError),
      }
    }

    return { ok: true }
  } catch (error) {
    console.error("[contact] erreur inattendue", error)
    return {
      ok: false,
      error:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? `Erreur inattendue : ${error.message}`
          : "L'envoi a échoué, réessayez plus tard.",
    }
  }
}
