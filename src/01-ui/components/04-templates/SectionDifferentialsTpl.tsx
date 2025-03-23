import React from 'react';
import SectionWithImage from '../03-organisms/SectionWithImage';
import { ISectionDifferentialsProps } from '../../../02-domain/interfaces/ISectionDifferentialsProps';
import { Container } from '@mui/material';

const SectionDifferentialsTpl: React.FC<ISectionDifferentialsProps> = ({ sectionData }) => {
  return (
    <section id={sectionData.id}>
      <Container>
        <SectionWithImage {...sectionData} />
      </Container>
    </section>
  )
};

export default SectionDifferentialsTpl;