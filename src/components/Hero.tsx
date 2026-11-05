import styled from "styled-components";
import { Container, Button, Row, PhotoSlot, Eyebrow, Photo } from "./ui";
import { site, whatsappUrl } from "../config/site";
import { gallery } from "../data/products";
const Wrap = styled.section`
  padding: clamp(40px, 7vw, 96px) 0;
`;
const Cols = styled.div`
  display: grid;
  gap: 40px;
  align-items: center;
  @media (min-width: ${(p) => p.theme.bp.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;
const H1 = styled.h1`
  font-size: clamp(2.6rem, 7vw, 5rem);
  margin: 0 0 20px;
`;
const P = styled.p`
  max-width: 46ch;
  font-size: 1.1rem;
  opacity: 0.85;
  margin: 0 0 28px;
`;
export function Hero() {
  const hero = gallery[0];
  return (
    <Wrap id="inicio">
      <Container>
        <Cols>
          <div>
            <Eyebrow>Doce Elfa</Eyebrow>
            <H1>{site.tagline}</H1>
            <P>Entre em contato e faça seu pedido.</P>
            <Row>
              <Button href="#cardapio">Conheça nosso cardápio</Button>
              <Button
                $variant="ghost"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Faça sua encomenda
              </Button>
            </Row>
          </div>
          {hero ? (
            <Photo src={hero.src} alt={hero.alt} />
          ) : (
            <PhotoSlot>
              Foto de destaque do produto
              <br />
              (adicionar em src/data/products.ts)
            </PhotoSlot>
          )}
        </Cols>
      </Container>
    </Wrap>
  );
}
