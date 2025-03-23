// src/01-ui/components/03-organisms/SectionOurServicesOrg.tsx
import React from 'react';
import TitleAtom from '../01-atoms/TitleAtom';
import ContentCarouselMol from '../02-molecules/ContentCarouselMol';
import { ISectionOurServicesProps } from '../../../02-domain/interfaces/ISectionOurServices';
import { Container, Typography } from '@mui/material';

const SectionOurServicesOrg: React.FC<ISectionOurServicesProps> = ({ sectionTitle = 'Nossos serviços', services, id }) => {
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