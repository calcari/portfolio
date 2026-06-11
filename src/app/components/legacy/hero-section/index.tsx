import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    img: "/images/icon/twitter-icon.svg",
    href: "https://twitter.com",
    icon: "Twitter",
  },
  {
    img: "/images/icon/behance-icon.svg",
    href: "https://behance.com",
    icon: "Behance",
  },
  {
    img: "/images/icon/dribble-icon.svg",
    href: "https://dribble.com",
    icon: "Dribble",
  },
]

const LegacyHeroSection = () => {
  return (
    <section className="pt-[88px]">
      <div className="container">
        <div>
          <div className="h-72 w-full">
            <Image
              src="/images/hero-sec/banner-bg-img.png"
              alt="banner-img"
              width={1080}
              height={267}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-x border-border">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center gap-10 px-4 pt-22 pb-8 xs:flex-row xs:items-start xs:justify-between xs:gap-3 sm:px-7 sm:pb-12">
              <div className="absolute top-0 -translate-y-1/2 transform">
                <Image
                  src="/images/hero-sec/user-img.png"
                  alt="Franck Calcari"
                  width={145}
                  height={145}
                  className="rounded-full border-4 border-white"
                />
                <span className="absolute right-5 bottom-2.5 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div className="flex flex-col items-center gap-2 text-center xs:items-start sm:gap-3">
                <h1>Franck Calcari</h1>
                <p className="font-normal text-violet-700">
                  Expert en ingénierie logicielle
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icon/map-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                  <p className="text-primary">Metz, France</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.icon}
                      aria-label={link.icon}
                      className="w-fit rounded-full border border-border p-2.5 hover:bg-primary/5 sm:p-3.5"
                    >
                      <Image
                        src={link.img}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden
                      />
                    </Link>
                  ))}
                </div>
                <Button className="h-auto rounded-full p-0">
                  <Link
                    href="#"
                    className="inline-block rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] p-0.5"
                  >
                    <span className="flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]">
                      <Image
                        src="/images/icon/spark-icon.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden
                      />
                      <span className="text-sm font-semibold text-white sm:text-base">
                        Get in touch
                      </span>
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacyHeroSection
