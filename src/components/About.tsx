import { Container, Section, Eyebrow, Title, Lead } from "./ui";
// TODO: história, diferenciais, cuidados na produção e experiência: texto da proprietária.
export function About() {
  return (
    <Section id="historia" $tone="paper">
      <Container>
        <Eyebrow>Nossa história</Eyebrow>
        <Title>Feito por Elfos</Title>
        <Lead>
          Em breve, aqui, a história da Doce Elfa contada pela própria marca.
        </Lead>
      </Container>
    </Section>
  );
}
