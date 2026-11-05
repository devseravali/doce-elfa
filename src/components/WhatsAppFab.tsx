import styled from "styled-components";
import { whatsappUrl } from "../config/site";
const A = styled.a`
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 60;
  min-height: 52px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #1f7a4a;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 20px #0003;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.04);
  }
`;
export const WhatsAppFab = () => (
  <A
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
  >
    WhatsApp
  </A>
);
