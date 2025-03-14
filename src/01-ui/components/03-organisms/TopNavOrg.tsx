import React from 'react';
import ContactNavMolecule from '../02-molecules/ContactNavMolecule';
import MainNavMolecule from '../02-molecules/MainNavMolecule';
import { useTopNavContext } from '../../../05-contexts/TopNavContext';

const TopNavOrg: React.FC = () => {  
  const { contactLinks, mainLinks, logoSrc } = useTopNavContext();

  return (
    <div>
      <ContactNavMolecule links={contactLinks} />
      <MainNavMolecule links={mainLinks} logoSrc={logoSrc} />
    </div>
  );
};

export default TopNavOrg;