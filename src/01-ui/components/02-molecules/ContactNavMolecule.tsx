import React from 'react';
import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom';
import * as S from '../../../04-assets/styles';
import LinkAtom from '../01-atoms/LinkAtom';

interface IProps {
  links: IPropsLinkAtom[];
}

const ContactNavMolecule: React.FC<IProps> = ({ links }) => {
  return (
    <S.ContactNav>
      {links.map((item: IPropsLinkAtom, index: number) => {
        return (
          <LinkAtom
            key={index}
            text={item.text}
            icon={item.icon}
            href={item.href}
          />
        );
      })}
    </S.ContactNav>
  );
};

export default ContactNavMolecule;