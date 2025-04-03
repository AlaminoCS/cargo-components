import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Link,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { IFooterProps } from '../../../02-domain/interfaces/IFooterProps';
import SocialMediaIcon from '../01-atoms/SocialMediaIcon';
import PrivacyPolicy from './modal-content/PrivacyPolicy';
import TermsOfUse from './modal-content/TermsOfUse';
import CookiePolicy from './modal-content/CookiePolicy';
import LGPDPolicy from './modal-content/LGPDPolicy';

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#FFA500',
  },
}));

const Footer: React.FC<IFooterProps> = ({
  companyName,
  companyDescription,
  contact,
  columns,
  socialMedia,
  legal,
  developerInfo,
  newsletter,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [email, setEmail] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);
  const stylesLink = { textDecoration: 'none', cursor: 'pointer' }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
  };

  const handleOpenModal = (modalType: string) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const getModalContent = (type: string) => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Política de Privacidade',
          content: <PrivacyPolicy />
        };
      case 'terms':
        return {
          title: 'Termos de Uso',
          content: <TermsOfUse />
        };
      case 'cookies':
        return {
          title: 'Política de Cookies',
          content: <CookiePolicy />
        };
      case 'lgpd':
        return {
          title: 'Lei Geral de Proteção de Dados (LGPD)',
          content: <LGPDPolicy />
        };
      default:
        return { title: '', content: '' };
    }
  };

  return (
    <Box component="footer" sx={{ backgroundColor: '#272a31', color: '#fff', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Informações da Empresa */}
          <Grid size={{xs: 12, md: 4}}>
            <Typography variant="h6" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {companyDescription}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <SocialIconButton>
                    <SocialMediaIcon iconName={social.iconName} />
                  </SocialIconButton>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Informações de Contato */}
          <Grid size={{xs: 12, md: 4}}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <List dense>
              <ListItem>
                <LocationOnIcon sx={{ mr: 1 }} />
                <ListItemText primary={contact.address} />
              </ListItem>
              <ListItem>
                <PhoneIcon sx={{ mr: 1 }} />
                <ListItemText primary={contact.phone} />
              </ListItem>
              <ListItem>
                <EmailIcon sx={{ mr: 1 }} />
                <ListItemText primary={contact.email} />
              </ListItem>
              <ListItem>
                <AccessTimeIcon sx={{ mr: 1 }} />
                <ListItemText
                  primary="Horário de Funcionamento"
                  secondary={
                    <Box component="div" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {contact.businessHours.map((hours, index) => (
                        <Typography key={index} variant="body2">
                          {hours}
                        </Typography>
                      ))}
                    </Box>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          {/* Newsletter */}
          {newsletter && (
            <Grid size={{xs: 12, md: 4}}>
              <Typography variant="h6" gutterBottom>
                {newsletter.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {newsletter.description}
              </Typography>
              <form onSubmit={handleNewsletterSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.23)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#FFA500',
                    '&:hover': {
                      backgroundColor: '#FF8C00',
                    },
                  }}
                >
                  {newsletter.buttonText}
                </Button>
              </form>
            </Grid>
          )}

          {/* Links */}
          {columns.map((column, index) => (
            <Grid size={{xs: 6, md: 2}} key={index}>
              <Typography variant="h6" gutterBottom>
                {column.title}
              </Typography>
              <List dense>
                {column.links.map((link, linkIndex) => (
                  <ListItem key={linkIndex} disablePadding>
                    <Link
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#FFA500',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <ListItemText primary={link.text} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Rodapé Legal e Créditos */}
        <Grid container spacing={2} alignItems="center">
          <Grid size={{xs: 12, md: 6}}>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <Link                
                onClick={() => handleOpenModal('privacy')}
                sx={stylesLink}
              >
                Política de Privacidade
              </Link>
              <Link
                onClick={() => handleOpenModal('terms')}
                sx={stylesLink}
              >
                Termos de Uso
              </Link>
              <Link
                onClick={() => handleOpenModal('cookies')}
                sx={stylesLink}
              >
                Política de Cookies
              </Link>
              <Link
                onClick={() => handleOpenModal('lgpd')}
                sx={stylesLink}
              >
                LGPD
              </Link>
            </Box>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Typography
              variant="body2"
              align={isMobile ? 'center' : 'right'}
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              © {new Date().getFullYear()} {companyName} - Todos os direitos reservados
              <br />
              Feito com ❤️ por{' '}
              <Link
                href={developerInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#FFA500', textDecoration: 'none' }}
              >
                {developerInfo.name}
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Modal Dialog */}
        <Dialog
          open={openModal !== null}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
        >
          {openModal && (
            <>              
              <DialogContent>
                {getModalContent(openModal).content}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                  Fechar
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Footer;