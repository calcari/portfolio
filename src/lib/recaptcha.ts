type RecaptchaVerifyResponse = {
  success: boolean
  "error-codes"?: string[]
}

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    console.error("[recaptcha] RECAPTCHA_SECRET_KEY manquante")
    return false
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  })

  if (!response.ok) {
    console.error("[recaptcha] vérification HTTP échouée", response.status)
    return false
  }

  const data = (await response.json()) as RecaptchaVerifyResponse
  if (!data.success) {
    console.error("[recaptcha] token refusé", data["error-codes"])
  }

  return data.success
}
