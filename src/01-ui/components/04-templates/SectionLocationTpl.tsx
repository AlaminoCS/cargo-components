// src/01-ui/components/04-templates/SectionLocationTpl.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import MapAtom from '../01-atoms/MapAtom';
import { ISectionLocation } from '../../../02-domain/interfaces/ISectionLocation';

const SectionLocationTpl: React.FC<ISectionLocation> = ({ title, text, map, id }) => {
  return (
    <section>
      <Box
        id={id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Container>
          <Typography variant="h2" align="left" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1" align="left" paragraph>
            {text}
          </Typography>

          <MapAtom title={map.title} src={map.src} />
        </Container>
      </Box>
    </section>
  );
};

export default SectionLocationTpl;