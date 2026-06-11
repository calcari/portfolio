import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
        >
          Franck Calcari
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            A propos
          </Link>
          <Link
            href="/typefolio"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Typefolio
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
