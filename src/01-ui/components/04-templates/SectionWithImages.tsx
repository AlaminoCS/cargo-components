import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

interface SectionWithImagesProps {
  text: string;
  title: string;
  images: string[];
}

const SectionWithImages: React.FC<SectionWithImagesProps> = ({ text, images, title }) => {
  return (
    <section>
      <Box sx={{ py: 8, px: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          {title}
        </Typography>

        <p style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto 4rem auto' }}>{text}</p>

        <Grid container spacing={4}>
          <Grid size={{xs: 12, md: 6}}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  maxWidth: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: { xs: 'none', md: 'scale(1.1)' },
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

          <Grid size={{xs: 12, md: 6}}>
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
                  imageStyles = {
                    position: { xs: 'static', md: 'absolute' },
                    top: { xs: undefined, md: 0 },
                    left: { xs: undefined, md: '-30px' },
                    zIndex: { xs: undefined, md: 10 },
                    maxWidth: { xs: '100%', md: '70%' },
                    transition: 'transform 0.3s ease-in-out',
                    mb: { xs: 2, md: 0 },
                    '&:hover': {
                      transform: { xs: 'none', md: 'scale(1.1)' },
                    },
                  };
                } else if (index === 1) {
                  imageStyles = {
                    position: { xs: 'static', md: 'absolute' },
                    top: { xs: undefined, md: '90px' },
                    left: { xs: undefined, md: '140px' },
                    zIndex: { xs: undefined, md: 11 },
                    maxWidth: { xs: '100%', md: '80%' },
                    transition: 'transform 0.3s ease-in-out',
                    mb: { xs: 2, md: 0 },
                    '&:hover': {
                      transform: { xs: 'none', md: 'scale(1.1)' },
                    },
                  };
                } else if (index === 2) {
                  imageStyles = {
                    position: { xs: 'static', md: 'absolute' },
                    top: { xs: undefined, md: '400px' },
                    left: { xs: undefined, md: '-100px' },
                    zIndex: { xs: undefined, md: 12 },
                    maxWidth: { xs: '100%', md: '80%' },
                    transition: 'transform 0.3s ease-in-out',
                    mb: { xs: 2, md: 0 },
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
    </section>
  );
};

export default SectionWithImages;