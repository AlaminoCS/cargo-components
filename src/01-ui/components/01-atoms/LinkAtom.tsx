import React, { ReactElement } from 'react';
import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom';

const LinkAtom: React.FC<IPropsLinkAtom> = ({ text, icon, href, target = '_self' }) => {
  return (
    <a href={href} target={target} rel="noopener noreferrer">
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {text}
    </a>
  );
};

export default LinkAtom;