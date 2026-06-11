// Adapté de @pedagome/shared-global (utils-tools/format.ts).

// Convertit un numéro au format international sans espaces (FR par défaut).
export function standardizePhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/ /g, "")
  if (phoneNumber.substring(0, 1) === "+") return cleaned
  return "+33" + cleaned.substring(1, 1 + 9)
}

// Formate un numéro français pour l'affichage : +33… → 0X XX XX XX XX.
export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/ /g, "")
  if (cleaned.substring(0, 3) === "+33") {
    const local = "0" + cleaned.substring(3)
    return local.replace(/(\d{2})(?=\d)/g, "$1 ").trim()
  }
  return phoneNumber
}

// Valide un numéro de téléphone (français à 10 chiffres ou format international).
export function testPhoneNumber(phoneNumber: unknown): boolean {
  if (typeof phoneNumber !== "string") return false

  const cleaned = phoneNumber.replace(/ /g, "")
  if (!cleaned) return false

  const regex = /^\s*\+?\s*([0-9][\s-]*){9,}$/
  if (!regex.test(cleaned)) return false

  const standardized = standardizePhoneNumber(phoneNumber)
  if (!standardized) return false
  if (!cleaned.startsWith("+") && cleaned.length !== 10) return false
  if (cleaned.startsWith("+33") && cleaned.length !== 12) return false

  return standardized.length > 1
}
