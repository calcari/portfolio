import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

export type PortfolioContactConfirmationEmailProps = {
  prenom: string
}

const body = {
  margin: "0 0 12px",
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#171717",
} as const

export function PortfolioContactConfirmationEmail({
  prenom,
}: PortfolioContactConfirmationEmailProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Votre message a bien été reçu</Preview>
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
          <Heading
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#171717",
              margin: "0 0 20px",
            }}
          >
            Message bien reçu
          </Heading>

          <Section>
            <Text style={body}>Bonjour {prenom},</Text>
            <Text style={body}>
              Merci pour votre message via mon portfolio. Je reviendrai vers vous
              dès que possible.
            </Text>
            <Text style={{ ...body, marginTop: "20px", marginBottom: 0 }}>
              Franck Calcari
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default PortfolioContactConfirmationEmail
