"use client"

import { useForm } from "@tanstack/react-form"
import type { AnyFieldApi } from "@tanstack/react-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema } from "@/lib/contact-schema"
import { sendContact } from "@/app/actions/contact"

function FieldError({ field }: { field: AnyFieldApi }) {
  if (!field.state.meta.isTouched || field.state.meta.errors.length === 0) {
    return null
  }
  const message = field.state.meta.errors
    .map((error) => (typeof error === "string" ? error : error?.message))
    .filter(Boolean)
    .join(", ")
  return <p className="text-xs text-destructive">{message}</p>
}

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      prenom: "",
      nom: "",
      organisation: "",
      email: "",
      telephone: "",
      remarque: "",
    },
    validators: { onChange: contactSchema },
    onSubmit: async ({ value }) => {
      const result = await sendContact(value)
      if (result.ok) {
        toast.success("Message envoyé, merci !")
        form.reset()
      } else {
        toast.error(result.error)
      }
    },
  })

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field name="prenom">
          {(field) => (
            <div className="grid gap-2">
              <Label htmlFor={field.name}>Prénom *</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="given-name"
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>

        <form.Field name="nom">
          {(field) => (
            <div className="grid gap-2">
              <Label htmlFor={field.name}>Nom *</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="family-name"
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <form.Field name="organisation">
        {(field) => (
          <div className="grid gap-2">
            <Label htmlFor={field.name}>Organisation</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              autoComplete="organization"
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field name="email">
          {(field) => (
            <div className="grid gap-2">
              <Label htmlFor={field.name}>Email *</Label>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="email"
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>

        <form.Field name="telephone">
          {(field) => (
            <div className="grid gap-2">
              <Label htmlFor={field.name}>Téléphone</Label>
              <Input
                id={field.name}
                name={field.name}
                type="tel"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                autoComplete="tel"
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <form.Field name="remarque">
        {(field) => (
          <div className="grid gap-2">
            <Label htmlFor={field.name}>Remarque</Label>
            <Textarea
              id={field.name}
              name={field.name}
              rows={5}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit} className="w-fit">
            {isSubmitting ? "Envoi…" : "Envoyer"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  )
}
