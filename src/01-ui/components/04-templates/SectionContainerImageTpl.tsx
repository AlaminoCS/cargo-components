// src/01-ui/components/04-templates/SectionContainerImageTpl.tsx
import React from 'react';
import ImageAtom from '../01-atoms/ImageAtom';
import { ISectionContainerImageProps } from '../../../02-domain/interfaces/ISectionContainerImageProps';
import { Container } from '@mui/material';

const SectionContainerImageTpl: React.FC<ISectionContainerImageProps> = ({ image }) => {
  return (
    <section>
      <ImageAtom src={image.src} alt={image.alt} />
    </section>
  )
};

export default SectionContainerImageTpl;