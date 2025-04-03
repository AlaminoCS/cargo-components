import styled from 'styled-components';

export const ContactNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};  
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.main};
  box-shadow: ${(props) => props.theme.shadows.small};  

  a {
    color: #fff !important;
    margin: 0 ${(props) => props.theme.spacing.medium};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between; // Alinha o logo à esquerda e os links ao centro
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.main};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 60px; // Altura padrão do logo
    width: auto;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.medium};
  margin: 0 auto; // Centraliza os links no espaço restante

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: color ${(props) => props.theme.transitions.default};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
