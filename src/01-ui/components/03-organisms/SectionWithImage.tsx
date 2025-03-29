// src/01-ui/components/03-organisms/SectionWithImage.tsx
import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { ISectionWithImage } from '../../../02-domain/interfaces/ISectionWithImage';
import ImageAtom from '../01-atoms/ImageAtom';

// Estilização do componente
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  .content {
    flex: 1;
    text-align: ${props => props.theme.textAlign};
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: ${props => props.theme.borderRadius.medium};
    }
  }

  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.medium};
  }

  p {
    color: ${props => props.theme.colors.text};
  }
`;

const SectionWithImage: React.FC<ISectionWithImage> = ({
  imagePosition,
  title,
  description,
  image,
}) => {
  return (
    <SectionContainer>
      {imagePosition === 'left' && (
        <>
          <div className="image-container" data-testid="image-container">
            <ImageAtom src={image.src} alt={image.alt} />
          </div>
          <div className="content" data-testid="content">
            <Typography variant="h2" align="left" gutterBottom>
              {title}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </>
      )}
      {imagePosition === 'right' && (
        <>
          <div className="content" data-testid="content">
            <Typography variant="h2" align="left" gutterBottom>
              {title}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="image-container" data-testid="image-container">
            <ImageAtom src={image.src} alt={image.alt} />
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default SectionWithImage;
