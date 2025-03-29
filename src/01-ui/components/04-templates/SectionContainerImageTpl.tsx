// src/01-ui/components/04-templates/SectionContainerImageTpl.tsx
import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react';

import { ISectionContainerImageProps } from '../../../02-domain/interfaces/ISectionContainerImageProps';
import ImageAtom from '../01-atoms/ImageAtom';

const SectionContainerImageTpl: React.FC<ISectionContainerImageProps> = ({ image }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (!isDesktop) {
    return null;
  }

  return (
    <section>
      <ImageAtom src={image.src} alt={image.alt} />
    </section>
  );
};

export default SectionContainerImageTpl;
