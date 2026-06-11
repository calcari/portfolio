import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import { formatPhoneNumber } from "@/lib/phone"

export type PortfolioContactEmailProps = {
  prenom: string
  nom: string
  organisation?: string
  email: string
  telephone?: string
  remarque?: string
}

const label = { margin: "0", fontSize: "12px", color: "#737373" } as const
const value = { margin: "0 0 12px", fontSize: "14px", color: "#171717" } as const

export function PortfolioContactEmail({
  prenom,
  nom,
  organisation,
  email,
  telephone,
  remarque,
}: PortfolioContactEmailProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>{`Nouveau message de ${prenom} ${nom}`}</Preview>
      <Body style={{ backgroundColor: "#f7f7f7", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            margin: "24px auto",
            maxWidth: "520px",
            padding: "28px",
          }}
        >
          <Heading style={{ fontSize: "18px", fontWeight: 500, color: "#171717", margin: "0 0 20px" }}>
            Nouveau message du portfolio
          </Heading>

          <Section>
            <Text style={label}>Nom</Text>
            <Text style={value}>
              {prenom} {nom}
            </Text>

            {organisation ? (
              <>
                <Text style={label}>Organisation</Text>
                <Text style={value}>{organisation}</Text>
              </>
            ) : null}

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            {telephone ? (
              <>
                <Text style={label}>Téléphone</Text>
                <Text style={value}>{formatPhoneNumber(telephone)}</Text>
              </>
            ) : null}
          </Section>

          {remarque ? (
            <>
              <Hr style={{ borderColor: "#e5e5e5", margin: "8px 0 16px" }} />
              <Section>
                <Text style={label}>Remarque</Text>
                <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{remarque}</Text>
              </Section>
            </>
          ) : null}
        </Container>
      </Body>
    </Html>
  )
}

export default PortfolioContactEmail
