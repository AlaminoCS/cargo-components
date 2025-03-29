import { Box } from '@mui/material';
import React from 'react';

import { useTopNavContext } from '../../../05-contexts/TopNavContext';
import ContactNavMolecule from '../02-molecules/ContactNavMolecule';
import MainNavMolecule from '../02-molecules/MainNavMolecule';

const TopNavOrg: React.FC = () => {
  const { contactLinks, mainLinks, logoSrc } = useTopNavContext();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#fff',
      }}
    >
      <ContactNavMolecule links={contactLinks} />
      <MainNavMolecule links={mainLinks} logoSrc={logoSrc} />
    </Box>
  );
};

export default TopNavOrg;
