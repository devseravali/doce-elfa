import { Container, Section, Eyebrow, Title, Lead, Button, Row } from "./ui";
import { site, whatsappUrl } from "../config/site";
export function Orders() {
  return (
    <Section id="encomendas" $tone="paper">
      <Container>
        <Eyebrow>Encomendas</Eyebrow>
        <Title>Faça sua encomenda</Title>
        <Lead>
          Escolha no cardápio de encomendas e fale com a gente pelo WhatsApp
          para confirmar disponibilidade, prazos e condições.
        </Lead>
        <Row>
          <Button href={site.menuUrl} target="_blank" rel="noopener noreferrer">
            Cardápio de encomendas
          </Button>
          <Button
            $variant="ghost"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </Button>
        </Row>
      </Container>
    </Section>
  );
}
