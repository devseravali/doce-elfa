import styled from "styled-components";
import { Container, Section, Eyebrow, Title, Lead, Button, Grid } from "./ui";
import { site } from "../config/site";
const Box = styled.div`
  padding: 28px;
  border-radius: 20px;
  border: 1px solid ${(p) => p.theme.colors.line};
  background: ${(p) => p.theme.colors.paper};
  h3 {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
  p {
    margin: 0 0 20px;
    opacity: 0.75;
  }
`;
export function Delivery() {
  return (
    <Section id="delivery">
      <Container>
        <Eyebrow>Delivery</Eyebrow>
        <Title>Peça pelo iFood</Title>
        <Lead>
          Duas lojas distintas no iFood: escolha a mais próxima de você.
        </Lead>
        <Grid $min="280px">
          {site.delivery.map((d) => (
            <Box key={d.id}>
              <h3>Doce Elfa {d.label}</h3>
              <p>{d.area}</p>
              <Button
                href={d.url ?? "#delivery"}
                $disabled={!d.url}
                aria-disabled={!d.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {d.url ? "Pedir no iFood" : "Link em breve"}
              </Button>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
