// src/components/04-templates/Footer.tsx
import React from 'react';
import { Box, Typography, Grid, Container, useMediaQuery, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta se é mobile

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: '#272a31',
          color: '#fff',
          padding: '20px 0',
        }}
      >
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent={isMobile ? 'center' : 'space-between'}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                align={isMobile ? 'center' : 'left'}
                sx={{ fontWeight: 'normal', fontSize: '16px' }}
              >
                ©️ Copyright 2025 - Todos os direitos reservados
              </Typography>
            </Grid>

            {/* Coluna da direita */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                align={isMobile ? 'center' : 'right'}
                sx={{ fontWeight: 'normal', fontSize: '16px' }}
              >
                Feito com ❤️ por <strong>Alamino Code Solutions</strong>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;