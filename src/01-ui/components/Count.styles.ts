// src/components/Count.styles.ts
import styled from 'styled-components'

// Estiliza o botão usando as variáveis do tema
export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.main};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

// Estiliza o contador
export const StyledCounter = styled.p`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.medium};
`
