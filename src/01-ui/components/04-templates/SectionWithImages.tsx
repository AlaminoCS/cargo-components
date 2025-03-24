// src/components/04-templates/SectionWithImages.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface SectionWithImagesProps {
  text: string;
  images: string[]; // Array de URLs das imagens
}

const SectionWithImages: React.FC<SectionWithImagesProps> = ({ text, images }) => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      {/* Texto */}
      <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', mx: 'auto' }}>
        {text}
      </Typography>

      {/* Container para as imagens */}
      <Grid container spacing={4}>
        {/* Coluna da esquerda (1 imagem) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative', // Adicionado para suportar hover
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                transition: 'transform 0.3s ease-in-out', // Efeito de transição
                '&:hover': {
                  transform: { xs: 'none', md: 'scale(1.1)' }, // Efeito de zoom no hover
                },
              }}
            >
              <img
                src={images[0]}
                alt="Imagem principal"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Coluna da direita (3 imagens sobrepostas no desktop) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {images.slice(1).map((image, index) => {
              let imageStyles = {};

              if (index === 0) {
                // Estilo para a primeira imagem
                imageStyles = {
                  position: { xs: 'static', md: 'absolute' },
                  top: { xs: undefined, md: 0 },
                  left: { xs: undefined, md: '-30px' },
                  zIndex: { xs: undefined, md: 10 },
                  maxWidth: { xs: '100%', md: '70%' }, // Primeira imagem menor
                  transition: 'transform 0.3s ease-in-out',
                  mb: { xs: 2, md: 0 }, // Margem inferior no mobile
                  '&:hover': {
                    transform: { xs: 'none', md: 'scale(1.1)' },
                  },
                };
              } else if (index === 1) {
                // Estilo para a segunda imagem
                imageStyles = {
                  position: { xs: 'static', md: 'absolute' },
                  top: { xs: undefined, md: '90px' },
                  left: { xs: undefined, md: '140px' },
                  zIndex: { xs: undefined, md: 11 },
                  maxWidth: { xs: '100%', md: '80%' }, // Segunda imagem maior
                  transition: 'transform 0.3s ease-in-out',
                  mb: { xs: 2, md: 0 }, // Margem inferior no mobile
                  '&:hover': {
                    transform: { xs: 'none', md: 'scale(1.1)' },
                  },
                };
              } else if (index === 2) {
                // Estilo para a terceira imagem
                imageStyles = {
                  position: { xs: 'static', md: 'absolute' },
                  top: { xs: undefined, md: '400px' },
                  left: { xs: undefined, md: '-100px' },
                  zIndex: { xs: undefined, md: 12 },
                  maxWidth: { xs: '100%', md: '80%' },
                  transition: 'transform 0.3s ease-in-out',
                  mb: { xs: 2, md: 0 }, // Margem inferior no mobile
                  '&:hover': {
                    transform: { xs: 'none', md: 'scale(1.1)' },
                  },
                };
              }

              return (
                <Box key={index} sx={imageStyles}>
                  <img
                    src={image}
                    alt={`Imagem ${index + 2}`}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionWithImages;