// src/01-ui/components/02-molecules/MainNavMolecule.tsx
import React from 'react';
import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom';
import * as S from '../../../04-assets/styles/styles';
import LinkAtom from '../01-atoms/LinkAtom';

interface IProps {
  logoSrc: string; 
  links: IPropsLinkAtom[]; 
}

const MainNavMolecule: React.FC<IProps> = ({ logoSrc, links }) => {
  return (
    <S.MainNav>
      {/* Logo */}
      <S.Logo href="/" aria-label="Página inicial">
        <img src={logoSrc} alt="Logo" />
      </S.Logo>

      {/* Links */}
      <S.NavLinks>
        {links.map((item: IPropsLinkAtom, index: number) => (
          <LinkAtom
            key={index}
            text={item.text}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </S.NavLinks>
    </S.MainNav>
  );
};

export default MainNavMolecule;