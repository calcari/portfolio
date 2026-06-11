declare module "mdx/types" {
  import type { ComponentProps, ElementType } from "react"

  export type MDXComponents = {
    [key: string]: ElementType
  }

  export interface MDXProps {
    components?: MDXComponents
  }

  export type MDXContent = (props: MDXProps) => JSX.Element
}
