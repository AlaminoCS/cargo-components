// src/01-ui/components/04-templates/SectionWhoWeAreTpl.tsx
import React from 'react';
import SectionWithImage from '../03-organisms/SectionWithImage';
import { ISectionWhoWeAreProps } from '../../../02-domain/interfaces/ISectionWhoWeAreProps';
import { Container } from '@mui/material';


const SectionWhoWeAreTpl: React.FC<ISectionWhoWeAreProps> = ({ sectionData }) => {
  return ( 
    <section id={sectionData.id}>
      <Container>
        <SectionWithImage {...sectionData} />    
      </Container>
    </section>   
  )
};

export default SectionWhoWeAreTpl;