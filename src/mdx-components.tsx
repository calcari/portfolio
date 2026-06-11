import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import type { ComponentProps } from "react"
import { isInternalAppHref, resolveContentHref } from "@/lib/content-paths"

function MdxLink({ href, children, ...props }: ComponentProps<"a">) {
  if (!href) {
    return <span>{children}</span>
  }

  const resolved = resolveContentHref(href)

  if (resolved.startsWith("http://") || resolved.startsWith("https://")) {
    return (
      <a href={resolved} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  if (isInternalAppHref(resolved)) {
    return <Link href={resolved}>{children}</Link>
  }

  return <span className="font-medium text-primary">{children}</span>
}

export const mdxComponents: MDXComponents = {
  a: MdxLink,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  }
}
