import { useState } from "react";
import styled from "styled-components";
import { Button } from "./ui";
import { whatsappUrl } from "../config/site";
const links = [
  ["#inicio", "Início"],
  ["#historia", "Nossa história"],
  ["#cardapio", "Cardápio"],
  ["#encomendas", "Encomendas"],
  ["#contato", "Contato"],
];
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${(p) => p.theme.colors.cream}ee;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(p) => p.theme.colors.line};
`;
const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Logo = styled.img`
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  flex: 0 0 auto;
  object-fit: contain;
  mix-blend-mode: multiply;
  @media (max-width: ${(p) => p.theme.bp.md}) {
    width: 72px;
    height: 72px;
  }
`;
const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 22px;
  a:not([role="button"]) {
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${(p) => p.theme.colors.accent};
    }
  }
  @media (max-width: ${(p) => p.theme.bp.md}) {
    display: ${(p) => (p.$open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    background: ${(p) => p.theme.colors.cream};
    border-bottom: 1px solid ${(p) => p.theme.colors.line};
  }
`;
const Burger = styled.button`
  display: none;
  min-width: 48px;
  min-height: 48px;
  background: none;
  border: 0;
  font-size: 1.6rem;
  cursor: pointer;
  color: inherit;
  @media (max-width: ${(p) => p.theme.bp.md}) {
    display: block;
  }
`;
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Bar>
      <Inner>
        <a href="/" aria-label="Doce Elfa — página inicial">
          <Logo
            src="/images/logo-doce-elfa.jpg"
            alt="Doce Elfa — Confeitaria Gourmet"
          />
        </a>
        <Burger
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </Burger>
        <Nav
          id="nav"
          $open={open}
          aria-label="Principal"
          onClick={() => setOpen(false)}
        >
          {links.map(([h, l]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
          <Button
            role="button"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer pedido
          </Button>
        </Nav>
      </Inner>
    </Bar>
  );
}
