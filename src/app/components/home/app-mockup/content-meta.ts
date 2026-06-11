import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Calculator,
  ClipboardList,
  Code,
  FileCode2,
  GraduationCap,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  Wrench,
} from "lucide-react"

export type CardMeta = {
  slug: string
  title: string
  subtitle: string
  image?: string
  icon?: LucideIcon
}

export const realisations: CardMeta[] = [
  {
    slug: "api-tiers-de-prestations",
    title: "API Tiers de prestations",
    subtitle:
      "Intégration de l'avance immédiate de crédit d'impôt dans l'ERP Dopple.",
    image: "/images/realisations/vignette-api-urssaf.png",
  },
  {
    slug: "portail-tuteur-mobile-first",
    title: "Portail tuteur mobile-first",
    subtitle: "Un espace en ligne mobile-first pour coordonner des cours particuliers.",
    image: "/images/realisations/vignette-teachers-app.png",
  },
  {
    slug: "contributions-open-source",
    title: "Contributions open source",
    subtitle: "Investigation et résolution de bugs dans des librairies open source.",
    image: "/images/realisations/vignette-open-source.png",
  },
  {
    slug: "industrialiser-environnement-dev",
    title: "Monorepo Dopple",
    subtitle: "Migration vers un monorepo et outillage pour industrialiser le développement.",
    image: "/images/realisations/vignette-monorepo.png",
  },
  {
    slug: "side-projects",
    title: "Side projects",
    subtitle: "Expérimentations et projets personnels.",
    image: "/images/realisations/vignette-side-projects.png",
  },
]

export type TimelineItem = {
  slug: string
  title: string
  structure: string
  logo: string
  start: number
  end: number
  // Position visuelle dans la grille, pour « tricher » sur le placement sans
  // changer les dates affichées (start/end). Défaut = start/end.
  layoutStart?: number
  layoutEnd?: number
  // Sous-entrées affichées dans la card (ex. plusieurs diplômes). Si présent,
  // remplace l'affichage titre/période unique. Ordre anti-chronologique.
  groups?: { start: number; end: number; title: string }[]
  kind: "formation" | "pro"
  side: "left" | "right"
}

// Côté gauche = formation/académique ; côté droit = pro/projets (1 colonne chacun).
// L'alternance ISCOD apparaît en 2 cards (formation + pro) pointant vers la même page.
// `start`/`end` sont des années mais désignent le milieu d'année (offset 6 mois) :
// 2019–2020 = mi-2019 → mi-2020.
export const parcoursTimeline: TimelineItem[] = [
  {
    slug: "iut-mesure-pysiques",
    title: "IUT Mesures Physiques, Metz",
    structure: "Université de Lorraine",
    logo: "/images/experiences/logo-univ-lorraine.png",
    start: 2016,
    end: 2019,
    kind: "formation",
    side: "left",
  },
  {
    slug: "du2e",
    title: "DU2E, Étudiant-Entrepreneur",
    structure: "PEEL · Université de Lorraine",
    logo: "/images/experiences/logo-peel.png",
    start: 2019,
    end: 2020,
    // Triche : se termine visuellement fin 2020 (2020.5 + offset = bord 2021).
    layoutEnd: 2020.5,
    kind: "formation",
    side: "left",
  },
  {
    slug: "iscod",
    title: "Mastère Expert en ingénierie logicielle",
    structure: "ISCOD · alternance",
    logo: "/images/experiences/logo-iscod-esiea.png",
    start: 2023,
    end: 2026,
    groups: [
      {
        start: 2024,
        end: 2026,
        title: "Mastère Expert en ingénierie logicielle",
      },
      {
        start: 2023,
        end: 2024,
        title: "Bachelor Concepteur Développeur d'Applications",
      },
    ],
    kind: "formation",
    side: "left",
  },
  {
    slug: "fetch",
    title: "L'envers d'une plateforme",
    structure: "Coursier · Fetch, Metz",
    logo: "/images/experiences/logo-fetch.png",
    start: 2016,
    end: 2018,
    kind: "pro",
    side: "right",
  },
  {
    slug: "escola-gestation",
    title: "Escola, Cofondateur",
    structure: "Cours particuliers à domicile, Metz",
    logo: "/images/experiences/logo-escola.png",
    start: 2017,
    end: 2021,
    // Triche : enchaîne après Fetch (mi-2018) et se termine fin 2020 (bord 2021).
    layoutStart: 2018,
    layoutEnd: 2020.5,
    kind: "pro",
    side: "right",
  },
  {
    slug: "pedagome-autodidacte",
    title: "Développeur autodidacte",
    structure: "Pedagome, Metz",
    logo: "/images/experiences/logo-pedagome.png",
    start: 2021,
    end: 2023,
    // Triche : démarre quand Escola se termine (début 2021, bord 2021) — handoff net.
    layoutStart: 2020.5,
    kind: "pro",
    side: "right",
  },
  {
    slug: "pedagome-apprentissage",
    title: "Développeur fullstack",
    structure: "Pedagome, Apprentissage, Metz",
    logo: "/images/experiences/logo-pedagome.png",
    start: 2023,
    end: 2026,
    kind: "pro",
    side: "right",
  },
]

export type CompetenceMeta = CardMeta & { level: number }
export type CompetenceGroup = { title: string; items: CompetenceMeta[] }

export const competenceGroups: CompetenceGroup[] = [
  {
    title: "Développement",
    items: [
      {
        slug: "developpement-web-full-stack",
        title: "Développement web full-stack",
        subtitle: "Une feature de bout en bout, de l'UI à la base de données.",
        icon: Code,
        level: 5,
      },
      {
        slug: "qualite-code-architecture",
        title: "Qualité du code et architecture",
        subtitle: "Lisibilité, maintenabilité et structure du code.",
        icon: FileCode2,
        level: 4,
      },
      {
        slug: "industrialisation-environnement-developpement",
        title: "Industrialisation de l'environnement",
        subtitle: "Outillage, CI et fiabilisation du dev.",
        icon: Wrench,
        level: 4,
      },
    ],
  },
  {
    title: "Compétences humaines",
    items: [
      {
        slug: "autonomie-et-autoformation-structuree",
        title: "Autonomie",
        subtitle: "Apprendre de façon structurée et autonome.",
        icon: GraduationCap,
        level: 5,
      },
      {
        slug: "communication",
        title: "Communication",
        subtitle: "Échanger clairement avec les équipes et les métiers.",
        icon: MessagesSquare,
        level: 3,
      },
      {
        slug: "organisation-et-priorisation",
        title: "Organisation et priorisation",
        subtitle: "Arbitrer et organiser le travail sous contraintes.",
        icon: ListChecks,
        level: 3,
      },
      {
        slug: "fiabilite",
        title: "Fiabilité",
        subtitle: "Livrer quelque chose de solide sur la durée.",
        icon: ShieldCheck,
        level: 4,
      },
    ],
  },
  {
    title: "Analyse & métier",
    items: [
      {
        slug: "analyse-et-description-des-besoins",
        title: "Analyse",
        subtitle: "Traduire un besoin métier en spécifications claires.",
        icon: ClipboardList,
        level: 4,
      },
      {
        slug: "analytics-bi",
        title: "Analytics & BI",
        subtitle: "Données, indicateurs et pilotage par la mesure.",
        icon: BarChart3,
        level: 3,
      },
      {
        slug: "comptabilite-paie",
        title: "Comptabilité et paie",
        subtitle: "Domaine métier maîtrisé au service du SI.",
        icon: Calculator,
        level: 4,
      },
    ],
  },

]
