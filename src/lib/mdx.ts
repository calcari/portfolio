import { compile, run } from "@mdx-js/mdx"
import type { MDXComponents } from "mdx/types"
import type { ComponentType } from "react"
import * as runtime from "react/jsx-runtime"
import remarkGfm from "remark-gfm"

export async function compileMdx(
  source: string
): Promise<ComponentType<{ components?: MDXComponents }>> {
  const compiled = await compile(source, {
    format: "md",
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    development: process.env.NODE_ENV === "development",
  })

  const { default: Content } = await run(String(compiled), {
    ...runtime,
  })

  return Content
}
