import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.main};
    margin: 0;
    padding: 0;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.main};
    text-align: center;
    margin-top: ${(props) => props.theme.spacing.large};
  }
`

export default GlobalStyles
