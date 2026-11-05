import { useMemo, useState } from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  Eyebrow,
  Title,
  Lead,
  Grid,
  Photo,
  PhotoSlot,
  Button,
  Row,
} from "./ui";
import { products } from "../data/products";
import { site } from "../config/site";
const Tab = styled.button<{ $on: boolean }>`
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  border: 1.5px solid ${(p) => p.theme.colors.ink};
  background: ${(p) => (p.$on ? p.theme.colors.ink : "transparent")};
  color: ${(p) => (p.$on ? p.theme.colors.cream : "inherit")};
`;
const Card = styled.article`
  transition: transform 0.25s;
  &:hover {
    transform: translateY(-4px);
  }
  h3 {
    font-size: 1.25rem;
    margin: 12px 0 4px;
  }
  p {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.8;
  }
  small {
    color: ${(p) => p.theme.colors.accent};
  }
`;
export function Products() {
  const cats = useMemo(
    () => ["Todos", ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );
  const [cat, setCat] = useState("Todos");
  const list = products.filter((p) => cat === "Todos" || p.category === cat);
  return (
    <Section id="cardapio">
      <Container>
        <Eyebrow>Nossos produtos</Eyebrow>
        <Title>Cardápio</Title>
        {products.length === 0 ? (
          <>
            <Lead>
              Veja todos os produtos e preços no cardápio digital oficial.
            </Lead>
            <Button
              href={site.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir cardápio completo
            </Button>
          </>
        ) : (
          <>
            <Row
              role="tablist"
              aria-label="Categorias"
              style={{ marginBottom: 28 }}
            >
              {cats.map((c) => (
                <Tab
                  key={c}
                  role="tab"
                  aria-selected={c === cat}
                  $on={c === cat}
                  onClick={() => setCat(c)}
                >
                  {c}
                </Tab>
              ))}
            </Row>
            <Grid>
              {list.map((p) => (
                <Card key={p.id}>
                  {p.image ? (
                    <Photo src={p.image} alt={p.name} loading="lazy" />
                  ) : (
                    <PhotoSlot>Foto a fornecer</PhotoSlot>
                  )}
                  <small>{p.category}</small>
                  <h3>{p.name}</h3>
                  {p.description && <p>{p.description}</p>}
                </Card>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Section>
  );
}
