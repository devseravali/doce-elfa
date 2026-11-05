import styled from "styled-components";
import { Container } from "./ui";
import { site, whatsappUrl } from "../config/site";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.cream};
  padding: 72px 0 24px;

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.65;
    }
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 56px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 36px 24px;

    > div:first-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;

    > div:first-child {
      grid-column: auto;
    }
  }
`;

const Brand = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    margin: 0 0 16px;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 300px;
    line-height: 1.8;
    opacity: 0.75;
    margin: 0;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin: 8px 0 22px;
    opacity: 0.6;
  }

  ul {
    display: grid;
    gap: 14px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  small {
    opacity: 0.65;
    font-size: 0.8rem;
  }
`;

export function Footer() {
  return (
    <FooterWrapper id="contato">
      <Container>
        <FooterContent>
          <Brand>
            <h2>Doce Elfa</h2>
            <p>
              Pequenos momentos, grandes sabores.
              Descubra nossas delícias e escolha seu próximo doce favorito.
            </p>
          </Brand>

          <FooterColumn>
            <h3>Explore</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#produtos">Nossos doces</a></li>
              <li><a href="#delivery">Delivery</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Fale com a gente</h3>
            <ul>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.menuUrl} target="_blank" rel="noopener noreferrer">
                  Cardápio online
                </a>
              </li>
              {site.address && <li>{site.address}</li>}
              {site.hours && <li>{site.hours}</li>}
            </ul>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <small>
            © {new Date().getFullYear()} Doce Elfa. Todos os direitos reservados.
          </small>
          <small>Feito com carinho para adoçar seus momentos.</small>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}