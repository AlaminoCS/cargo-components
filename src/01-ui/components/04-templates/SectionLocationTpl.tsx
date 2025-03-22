// src/01-ui/components/04-templates/SectionLocationTpl.tsx
import React from 'react';
import styled from 'styled-components';
import { ISectionLocation } from '../../../02-domain/interfaces/ISectionLocation';
import ContentTitleTextMol from '../02-molecules/ContentTitleTextMol';
import MapAtom from '../01-atoms/MapAtom';

// Estilização do componente
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large} 0;

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    gap: ${(props) => props.theme.spacing.xlarge};
  }
`;

const SectionLocationTpl: React.FC<ISectionLocation> = ({ title, text, map }) => {
  return (
    <SectionContainer>
      <ContentTitleTextMol title={title} text={text} />
      <MapAtom title={map.title} src={map.src} />
    </SectionContainer>
  );
};

export default SectionLocationTpl;