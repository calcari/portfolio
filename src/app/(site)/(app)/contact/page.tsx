import { ContactForm } from "@/app/components/home/app-mockup/contact-form"

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium text-primary">Me contacter</h1>
        <p className="text-sm text-muted-foreground">
          Une question, un projet ? Laissez-moi un message, je vous réponds
          rapidement.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
