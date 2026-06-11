import Image from "next/image"

const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="group relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[url('/images/announcementbar/announcementbar-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        </div>
        <div className="relative z-10 container">
          <div className="flex items-center justify-center gap-2 py-2.5">
            <p className="text-sm text-white sm:text-base">
              Now available on Figma & Code — start customizing your personal site today.
            </p>
            <Image
              src="/images/icon/arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
              className="transition-all duration-500 ease-in-out group-hover:translate-x-1.5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
