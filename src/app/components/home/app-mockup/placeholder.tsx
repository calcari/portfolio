export function Placeholder({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-2 px-6 text-center">
      <h2 className="text-lg font-medium text-primary">{title}</h2>
      <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
