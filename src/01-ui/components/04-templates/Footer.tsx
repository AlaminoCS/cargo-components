// src/components/04-templates/Footer.tsx
import React from 'react';
import { Box, Typography, Grid, Container, useMediaQuery, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta se é mobile

  return (
    <Box
      sx={{
        backgroundColor: '#272a31', // Cor de fundo
        color: '#fff', // Cor do texto
        padding: '20px 0', // Padding superior e inferior
      }}
    >
      {/* Container com largura fixa (md) */}
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'space-between'}
        >
          {/* Coluna da esquerda */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              align={isMobile ? 'center' : 'left'} // Centraliza no mobile, alinha à esquerda no desktop
              sx={{ fontWeight: 'normal', fontSize: '16px' }}
            >
              ©️ Copyright 2025 - Todos os direitos reservados
            </Typography>
          </Grid>

          {/* Coluna da direita */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              align={isMobile ? 'center' : 'right'} // Centraliza no mobile, alinha à direita no desktop
              sx={{ fontWeight: 'normal', fontSize: '16px' }}
            >
              Feito com ❤️ por{' '}
              <strong style={{ fontWeight: 'bold' }}>Alamino Code Solutions</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;