import {
  Container,
  Section,
  Eyebrow,
  Title,
  Grid,
  Photo,
  PhotoSlot,
} from "./ui";
import { gallery } from "../data/products";

export function Gallery() {
  return (
    <Section id="galeria" $tone="paper">
      <Container>
        <Eyebrow>Galeria</Eyebrow>
        <Title>Nossos doces</Title>
        <Grid $min="220px">
          {gallery.length
            ? gallery.map((g) => (
                <Photo key={g.src} src={g.src} alt={g.alt} loading="lazy" />
              ))
            : Array.from({ length: 6 }, (_, i) => (
                <PhotoSlot key={i}>Foto oficial a fornecer</PhotoSlot>
              ))}
        </Grid>
      </Container>
    </Section>
  );
}
