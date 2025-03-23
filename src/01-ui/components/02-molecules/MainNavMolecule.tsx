import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
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
      <Toolbar>
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

        {/* Links para desktop */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {links.map((item, index) => (
              <LinkAtom key={index} text={item.text} icon={item.icon} href={item.href} />
            ))}
          </Box>
        )}

        {/* Ícone de menu para mobile */}
        {isMobile && (
          <IconButton edge="end" sx={{display: 'flex', justifyContent: 'flex-end'}} color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
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
    </AppBar>
  );
};

export default MainNavMolecule;