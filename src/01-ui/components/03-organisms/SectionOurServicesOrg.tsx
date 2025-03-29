// src/01-ui/components/03-organisms/SectionOurServicesOrg.tsx
import { Container, Typography } from '@mui/material';
import React from 'react';

import { ISectionOurServicesProps } from '../../../02-domain/interfaces/ISectionOurServices';
import ContentCarouselMol from '../02-molecules/ContentCarouselMol';

const SectionOurServicesOrg: React.FC<ISectionOurServicesProps> = ({
  sectionTitle = 'Nossos serviços',
  services,
  id,
}) => {
  return (
    <section id={id}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          {sectionTitle}
        </Typography>

        <ContentCarouselMol services={services} />
      </Container>
    </section>
  );
};

export default SectionOurServicesOrg;
