// src/01-ui/components/01-atoms/MapAtom.tsx
import React from 'react';
import styled from 'styled-components';

// Estilização do MapAtom
const StyledMap = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;

interface MapAtomProps {
  title: string; // Título do iframe
  src: string; // URL do iframe
}

const MapAtom: React.FC<MapAtomProps> = ({ title, src }) => {
  return <StyledMap title={title} src={src}></StyledMap>;
};

export default MapAtom;