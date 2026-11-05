import { Container, Section, Eyebrow, Title, Lead, Button } from "./ui";
import { site } from "../config/site";
export function Instagram() {
  return (
    <Section $tone="dark">
      <Container>
        <Eyebrow>Instagram</Eyebrow>
        <Title>{site.instagramHandle}</Title>
        <Lead>
          Acompanhe novidades, encomendas e bastidores no perfil oficial.
        </Lead>
        <Button
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguir no Instagram
        </Button>
      </Container>
    </Section>
  );
}
