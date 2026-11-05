import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:80px}
  body{margin:0;background:${p => p.theme.colors.cream};color:${p => p.theme.colors.ink};font-family:${p => p.theme.fonts.sans};line-height:1.6}
  img{max-width:100%;display:block}
  h1,h2,h3{font-family:${p => p.theme.fonts.serif};font-weight:600;line-height:1.1;margin:0}
  a{color:inherit}
  :focus-visible{outline:3px solid ${p => p.theme.colors.accent};outline-offset:3px}
  @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
