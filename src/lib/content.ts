import fs from "node:fs/promises"
import path from "node:path"

const CONTENT_DIR = path.join(process.cwd(), "src/content")

type ContentSection = "competences" | "realisations" | "experiences"

function sectionDir(section: ContentSection) {
  return path.join(CONTENT_DIR, section)
}

async function readContentFile(relativePath: string): Promise<string | null> {
  try {
    return await fs.readFile(path.join(CONTENT_DIR, relativePath), "utf8")
  } catch {
    return null
  }
}

export function experienceSlugFromFilename(filename: string): string {
  return filename.replace(/^\d+\.\s*/, "").replace(/\.md$/i, "")
}

export async function getPresentation(): Promise<string | null> {
  return readContentFile("presentation.md")
}

export async function getExperience(slug: string): Promise<string | null> {
  const files = await fs.readdir(sectionDir("experiences"))
  const match = files.find(
    (file) => file !== "index.md" && experienceSlugFromFilename(file) === slug
  )

  if (!match) return null
  return readContentFile(`experiences/${match}`)
}

export async function listExperienceSlugs(): Promise<string[]> {
  const files = await fs.readdir(sectionDir("experiences"))
  return files
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map(experienceSlugFromFilename)
}

export async function getCompetence(slug: string): Promise<string | null> {
  return readContentFile(`competences/${slug}.md`)
}

export async function listCompetenceSlugs(): Promise<string[]> {
  const files = await fs.readdir(sectionDir("competences"))
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/i, ""))
}

export function extractMarkdownTitle(markdown: string): string | undefined {
  for (const line of markdown.split("\n")) {
    const match = line.match(/^#\s+(.+?)\s*$/)
    if (match) return match[1].trim()
  }

  return undefined
}

export async function getRealisationArticleTitle(
  slug: string
): Promise<string | undefined> {
  const content = await getRealisation(slug)
  if (!content) return undefined
  return extractMarkdownTitle(content)
}

export async function getRealisation(slug: string): Promise<string | null> {
  return readContentFile(`realisations/${slug}.md`)
}

export async function listRealisationSlugs(): Promise<string[]> {
  const files = await fs.readdir(sectionDir("realisations"))
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/i, ""))
}
