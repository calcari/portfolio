"use client"

import dynamic from "next/dynamic"

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
})

export const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export function ContactRecaptcha({
  resetKey,
  onChange,
}: {
  resetKey: number
  onChange: (token: string | null) => void
}) {
  if (!recaptchaSiteKey) {
    return (
      <p className="text-sm text-muted-foreground">
        Captcha non configuré (clé publique manquante).
      </p>
    )
  }

  return (
    <ReCAPTCHA
      key={resetKey}
      sitekey={recaptchaSiteKey}
      onChange={onChange}
      onExpired={() => onChange(null)}
    />
  )
}
