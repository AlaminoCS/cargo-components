import { Container } from '@mui/material';
import React from 'react';

import { ISectionDifferentialsProps } from '../../../02-domain/interfaces/ISectionDifferentialsProps';
import SectionWithImage from '../03-organisms/SectionWithImage';

const SectionDifferentialsTpl: React.FC<ISectionDifferentialsProps> = ({ sectionData }) => {
  return (
    <section id={sectionData.id}>
      <Container>
        <SectionWithImage {...sectionData} />
      </Container>
    </section>
  );
};

export default SectionDifferentialsTpl;
