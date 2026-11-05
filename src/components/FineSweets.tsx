import {
  Container,
  Section,
  Eyebrow,
  Title,
  Lead,
  Button,
  Grid,
  Photo,
} from "./ui";
import { site } from "../config/site";
import { products } from "../data/products";
export function FineSweets() {
  const url = site.fineSweetsPdfUrl;
  return (
    <Section $tone="dark" id="doces-finos">
      <Container>
        <Eyebrow>Linha especial</Eyebrow>
        <Title>Doces finos</Title>
        <Lead>Consulte o catálogo oficial de doces finos em PDF.</Lead>
        <Grid $min="280px" style={{ marginBottom: 28 }}>
          {products.map((product) =>
            product.image ? (
              <Photo
                key={product.id}
                $ratio="16/10"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            ) : null,
          )}
        </Grid>
        <Button
          href={url || "#doces-finos"}
          $disabled={!url}
          aria-disabled={!url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url ? "Ver catálogo em PDF" : "Catálogo em breve"}
        </Button>
      </Container>
    </Section>
  );
}
