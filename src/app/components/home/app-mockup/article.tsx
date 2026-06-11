import Image from "next/image"

import { compileMdx } from "@/lib/mdx"
import { mdxComponents } from "@/mdx-components"

export async function Article({
  source,
  logos,
}: {
  source: string
  logos?: string[]
}) {
  const Content = await compileMdx(source)

  return (
    <article
      className="mx-auto max-w-2xl space-y-4 px-6 py-8
        [&_h1]:text-2xl [&_h1]:font-medium [&_h1]:tracking-tight [&_h1]:text-primary
        [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-primary
        [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-primary
        [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground
        [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm [&_ul]:text-muted-foreground
        [&_li]:marker:text-muted-foreground
        [&_strong]:font-medium [&_strong]:text-primary
        [&_a]:underline-offset-4 hover:[&_a]:underline
        [&_img]:my-2 [&_img]:max-w-full [&_img]:rounded-lg"
    >
      {logos && logos.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-3">
          {logos.map((logo, i) => (
            <div key={i} className="min-w-[100px] flex-1 rounded-lg bg-muted p-3">
              <Image src={logo} alt="" width={747} height={307} className="h-auto w-full" />
            </div>
          ))}
        </div>
      )}
      <Content components={mdxComponents} />
    </article>
  )
}
