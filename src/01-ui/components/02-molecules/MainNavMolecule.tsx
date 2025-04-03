import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom';
import LinkAtom from '../01-atoms/LinkAtom';

interface IProps {
  logoSrc: string;
  links: IPropsLinkAtom[];
}

const MainNavMolecule: React.FC<IProps> = ({ logoSrc, links }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para controlar o Drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta se é mobile

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Container>
        <Toolbar>
          {/* Ícone de menu para mobile (alinhado à esquerda) */}
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Box
            sx={{
              flexGrow: isMobile ? 1 : 0, // Centraliza o logo no mobile
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start', // Centraliza no mobile, alinha à esquerda no desktop
              position: isMobile ? 'relative' : undefined, // Posição relativa no mobile
              left: isMobile ? '-26px' : undefined, // Ajuste de posição no mobile
            }}
          >
            <Link href="#home" underline="none" aria-label="Página inicial">
              <Box
                component="img"
                src={logoSrc}
                alt="Logo"
                sx={{
                  height: '40px',
                  width: 'auto',
                }}
              />
            </Link>
          </Box>

          {/* Links para desktop */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {links.map((item, index) => (
                <LinkAtom key={index} text={item.text} icon={item.icon} href={item.href} />
              ))}
            </Box>
          )}
        </Toolbar>

        {/* Drawer para mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List>
              {links.map((item, index) => (
                <ListItem key={index} component="a" href={item.href}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default MainNavMolecule;