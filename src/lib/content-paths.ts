function experienceSlugFromFilename(filename: string): string {
  const decoded = decodeURIComponent(filename)
  return decoded.replace(/^\d+\.\s*/, "").replace(/\.md$/i, "")
}

const REALISATION_ALIASES: Record<string, string> = {
  "api tiers de prestations": "api-tiers-de-prestations",
  "concevoir-un-erp-metier-full-stack-pour-centraliser-l-activite":
    "api-tiers-de-prestations",
  "portail tuteur mobile-first": "portail-tuteur-mobile-first",
  "portailtuteurmobile-first": "portail-tuteur-mobile-first",
  "industrialiser-un-environnement-de-developpement-web-full-stack":
    "industrialiser-environnement-dev",
  "monorepo dopple": "industrialiser-environnement-dev",
  contributions: "contributions-open-source",
  "contributions-open-source": "contributions-open-source",
  "side-projects": "side-projects",
}

const COMPETENCE_ALIASES: Record<string, string> = {
  "fiabilite-et-sens-des-responsabilites": "fiabilite",
  "analyse-et-resolution-de-problemes-complexes": "fiabilite",
  "pragmatisme-et-adaptation-aux-contraintes": "organisation-et-priorisation",
  "analytics-bi": "analytics-bi",
}

function normalizeKey(value: string): string {
  return decodeURIComponent(value)
    .replace(/%E2%9C%85/gi, "")
    .replace(/^✅\s*/, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
}

function slugFromBasename(basename: string): string {
  const key = normalizeKey(basename.replace(/\.md$/i, ""))
  return REALISATION_ALIASES[key] ?? COMPETENCE_ALIASES[key] ?? key
}

export function resolveContentHref(href: string): string {
  if (!href) return href

  let normalized = href
  if (normalized.startsWith("http://../") || normalized.startsWith("https://../")) {
    normalized = normalized.replace(/^https?:\/\//, "")
  }

  if (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://")
  ) {
    return normalized
  }

  if (normalized.startsWith("/")) {
    return normalized
  }

  if (normalized.startsWith("#")) {
    return normalized
  }

  const cleaned = normalized.replace(/^(\.\/|\.\.\/)+/, "")

  if (/^presentation\.md$/i.test(cleaned) || cleaned.endsWith("/presentation.md")) {
    return "/presentation"
  }

  if (/experiences\/index\.md$/i.test(cleaned)) {
    return "/parcours"
  }

  if (/^competences\/index\.md$/i.test(cleaned)) {
    return "/competences"
  }

  if (/^realisations\/index\.md$/i.test(cleaned)) {
    return "/realisations"
  }

  const competenceMatch = cleaned.match(/(?:^|\/)competences\/([^/?#]+)\.md$/i)
  if (competenceMatch) {
    return `/competences/${slugFromBasename(competenceMatch[1])}`
  }

  const realisationMatch = cleaned.match(/(?:^|\/)realisations\/([^/?#]+)\.md$/i)
  if (realisationMatch) {
    return `/realisations/${slugFromBasename(realisationMatch[1])}`
  }

  const experienceMatch = cleaned.match(/(?:^|\/)experiences\/(.+?)\.md$/i)
  if (experienceMatch) {
    const slug = experienceSlugFromFilename(`${experienceMatch[1]}.md`)
    return `/parcours/${slug}`
  }

  return href
}

export function isInternalAppHref(href: string): boolean {
  return href.startsWith("/")
}
