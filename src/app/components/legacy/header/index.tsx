import Link from "next/link"
import AnnouncementBar from "../announcementBar"

const LegacyHeader = () => {
  return (
    <header>
      <AnnouncementBar />
      <div className="fixed top-[42px] left-0 right-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-3">
          <Link
            href="/typefolio"
            className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
          >
            Typefolio
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Nouvelle home
          </Link>
        </div>
      </div>
    </header>
  )
}

export default LegacyHeader
