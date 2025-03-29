// src/01-ui/components/04-templates/HeaderTpl.tsx
import React from 'react';

import { IHeaderProps } from '../../../02-domain/interfaces/IHeaderProps';
import { TopNavProvider } from '../../../05-contexts/TopNavContext';
import BigImgCarousel from '../03-organisms/BigImgCarousel';
import TopNavOrg from '../03-organisms/TopNavOrg';

const HeaderTpl: React.FC<IHeaderProps> = ({ contactLinks, mainLinks, logoSrc, banners }) => {
  return (
    <TopNavProvider
      value={{
        contactLinks,
        mainLinks,
        logoSrc,
      }}
    >
      <header id="home">
        <TopNavOrg />
        <BigImgCarousel banners={banners} />
      </header>
    </TopNavProvider>
  );
};

export default HeaderTpl;
