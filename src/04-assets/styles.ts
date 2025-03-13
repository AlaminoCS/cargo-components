// src/styles/ContactNav.ts
import styled from 'styled-components';

export const ContactNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.main};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.shadows.small};

  a {
    color: ${(props) => props.theme.colors.text};
    margin: 0 ${(props) => props.theme.spacing.medium};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;