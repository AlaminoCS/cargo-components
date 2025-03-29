// src/01-ui/components/04-templates/SectionWhoWeAreTpl.tsx
import { Container } from '@mui/material';
import React from 'react';

import { ISectionWhoWeAreProps } from '../../../02-domain/interfaces/ISectionWhoWeAreProps';
import SectionWithImage from '../03-organisms/SectionWithImage';

const SectionWhoWeAreTpl: React.FC<ISectionWhoWeAreProps> = ({ sectionData }) => {
  return (
    <section id={sectionData.id}>
      <Container>
        <SectionWithImage {...sectionData} />
      </Container>
    </section>
  );
};

export default SectionWhoWeAreTpl;
