import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.main};
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    margin-top: ${(props) => props.theme.spacing.medium};
    margin-bottom: ${(props) => props.theme.spacing.small};
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
  }

  a {
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    transition: ${(props) => props.theme.transitions.default};

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
    font-family: ${(props) => props.theme.fonts.main};
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
    font-family: ${(props) => props.theme.fonts.main};
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
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${(props) => props.theme.spacing.medium};
    padding-left: ${(props) => props.theme.spacing.medium};
  }

  li {
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  code {
    font-family: ${(props) => props.theme.fonts.code};
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