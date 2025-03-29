import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';

import { IContactLink } from '../../../02-domain/interfaces/IHeaderProps';
import { ContactNav } from '../../../04-assets/styles/styles';
import LinkAtom from '../01-atoms/LinkAtom';

interface IProps {
  links: IContactLink[];
}

const ContactNavMolecule: React.FC<IProps> = ({ links }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <ContactNav>
      <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          {/* Links para desktop */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {links.map((item, index) => (
                <LinkAtom key={index} text={item.text} iconName={item.iconName} href={item.href} />
              ))}
            </Box>
          )}

          {/* Ícone de menu para mobile */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
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
    </ContactNav>
  );
};

export default ContactNavMolecule;
