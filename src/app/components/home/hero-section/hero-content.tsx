import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social"
import { cn } from "@/lib/utils"
import Divider from '../../divider'

const socialLinks = [
  { href: "https://github.com/calcari", label: "GitHub", Icon: GitHubIcon },
  { href: "https://fr.linkedin.com/in/franck-calcari", label: "LinkedIn", Icon: LinkedInIcon },
]

export function HeroContent({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex w-full max-w-xl flex-col items-center text-center", className)}>
      <div className="mb-6 sm:mb-10">
        <Image
          src="/images/hero-sec/user-img.png"
          alt="Franck Calcari"
          width={176}
          height={176}
          priority
          className="size-30 rounded-full border border-border object-cover sm:size-44"
        />
      </div>

      <div className="flex flex-col gap-2 sm:gap-5">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
            Franck Calcari
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground sm:text-lg">
            Expert en ingénierie logicielle
          </p>
        </div>

        <p className="mt-2 mx-auto max-w-md text-sm sm:text-base leading-tight text-muted-foreground">
          Je conçois des applications web performantes avec TypeScript et React.
          Développeur fullstack à Metz, je fais évoluer l&apos;écosystème numérique de Pedagome.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm">
          <MapPin className="size-4 text-muted-foreground" aria-hidden />
          <p className="text-primary">Metz, France</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-border p-2.5 text-primary transition-colors hover:bg-muted sm:p-3"
            >
              <Icon size={18} aria-hidden />
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-full">
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
