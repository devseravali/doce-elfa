import styled from "styled-components";
export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const Section = styled.section<{ $tone?: "dark" | "paper" }>`
  padding: clamp(56px, 9vw, 112px) 0;
  background: ${(p) =>
    p.$tone === "dark"
      ? p.theme.colors.ink
      : p.$tone === "paper"
        ? p.theme.colors.paper
        : "transparent"};
  color: ${(p) => (p.$tone === "dark" ? p.theme.colors.cream : "inherit")};
`;
export const Eyebrow = styled.p`
  margin: 0 0 12px;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.accent};
  font-weight: 600;
`;
export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 16px;
`;
export const Lead = styled.p`
  max-width: 56ch;
  font-size: 1.05rem;
  opacity: 0.85;
  margin: 0 0 28px;
`;
export const Button = styled.a<{
  $variant?: "solid" | "ghost";
  $disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 26px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid ${(p) => p.theme.colors.accent};
  cursor: pointer;
  transition:
    transform 0.2s,
    background 0.2s,
    color 0.2s;
  background: ${(p) =>
    p.$variant === "ghost" ? "transparent" : p.theme.colors.accent};
  color: ${(p) => (p.$variant === "ghost" ? "inherit" : "#fff")};
  &:hover {
    transform: translateY(-2px);
    background: ${(p) => p.theme.colors.ink};
    border-color: ${(p) => p.theme.colors.ink};
    color: #fff;
  }
  ${(p) => p.$disabled && "opacity:.5;pointer-events:none;"}
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const PhotoSlot = styled.div<{ $ratio?: string }>`
  aspect-ratio: ${(p) => p.$ratio ?? "4/5"};
  border-radius: 20px;
  border: 1.5px dashed ${(p) => p.theme.colors.line};
  display: grid;
  place-items: center;
  text-align: center;
  padding: 16px;
  font-size: 0.85rem;
  color: ${(p) => p.theme.colors.muted};
  background: ${(p) => p.theme.colors.paper};
`;
export const Photo = styled.img<{ $ratio?: string }>`
  aspect-ratio: ${(p) => p.$ratio ?? "4/5"};
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
export const Grid = styled.div<{ $min?: string }>`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(p) => p.$min ?? "240px"}, 1fr)
  );
`;
