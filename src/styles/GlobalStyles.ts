import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url('https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.woff2') format('woff2');
  }

  /* Estilos globais */

  /* Habilita rolagem suave para toda a página */
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  header{
    &#home{
      margin-bottom: 4rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Roboto Condensed', sans-serif !important;
    margin-top: ${(props) => props.theme.spacing.medium};
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  strong, a {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
    text-align: center;
    margin-top: ${(props) => props.theme.spacing.large};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
  }

  h5 {
    font-size: ${(props) => props.theme.fontSizes.h5};
  }

  h6 {
    font-size: ${(props) => props.theme.fontSizes.h6};
  }

  p {
    margin-bottom: ${(props) => props.theme.spacing.medium};
    font-family: 'Open Sans', sans-serif; // Fonte para parágrafos
  }

  figure {
    margin: 0;
  }

  /* Aplica margem inferior e background alternado para sections */
  #root {
    
  
    > section, > figure {
      /* Fundo cinza claro para sections em posições pares */
      &:nth-of-type(even) {
        background-color: #f9f9f9; /* Cinza claro */
        padding: 2rem;
      }

      /* Fundo padrão para sections em posições ímpares */
      &:nth-of-type(odd) {
        background-color: transparent; /* Sem fundo */
      }

      margin-bottom: 3rem;      
    }
  }

  a {
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    transition: ${(props) => props.theme.transitions.default};
    font-family: 'Open Sans', sans-serif; // Fonte para links

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
    border: none;
    padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
    border-radius: ${(props) => props.theme.borderRadius.small};
    font-family: 'Open Sans', sans-serif; // Fonte para botões
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.default};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.secondary};
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    width: 100%;
    padding: ${(props) => props.theme.spacing.small};
    margin-bottom: ${(props) => props.theme.spacing.medium};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius.small};
    font-family: 'Open Sans', sans-serif; // Fonte para inputs
    transition: ${(props) => props.theme.transitions.default};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      outline: none;
    }
  }

  label {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.small};
    font-weight: bold;
    font-family: 'Open Sans', sans-serif; // Fonte para labels
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${(props) => props.theme.spacing.medium};
    padding-left: ${(props) => props.theme.spacing.medium};
    font-family: 'Open Sans', sans-serif; // Fonte para listas
  }

  li {
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  code {
    font-family: 'Open Sans', sans-serif; // Fonte para código
    background-color: ${(props) => props.theme.colors.secondary};
    padding: ${(props) => props.theme.spacing.small};
    border-radius: ${(props) => props.theme.borderRadius.small};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.spacing.medium};
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${(props) => props.theme.colors.primary};
  }

  .text-secondary {
    color: ${(props) => props.theme.colors.secondary};
  }

  .bg-primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
  }

  .bg-secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
  }
`;

export default GlobalStyles;