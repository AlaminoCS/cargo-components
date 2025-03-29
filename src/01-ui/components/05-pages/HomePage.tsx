// src/components/05-pages/HomePage.tsx
import React from 'react';

import { differentialData } from '../../../07-mocks/differentialsData';
import { footerData } from '../../../07-mocks/footerData';
import { headerData } from '../../../07-mocks/headerData';
import { locationData } from '../../../07-mocks/locationData';
import { sectionWithImagesData } from '../../../07-mocks/sectionWithImagesData';
import { separatorImageData } from '../../../07-mocks/separatorImageData';
import { sectionData } from '../../../07-mocks/servicesData';
import { socialMediaLinks } from '../../../07-mocks/socialMediaData';
import { whatsappData } from '../../../07-mocks/whatsappData';
import { whoWeAreData } from '../../../07-mocks/whoWeAreData';
import WhatsAppButtonAtom from '../01-atoms/WhatsAppButtonAtom';
import SectionOurServicesOrg from '../03-organisms/SectionOurServicesOrg';
import ContactForm from '../04-templates/ContactForm';
import Footer from '../04-templates/Footer';
import HeaderTpl from '../04-templates/HeaderTpl';
import SectionContainerImageTpl from '../04-templates/SectionContainerImageTpl';
import SectionDifferentialsTpl from '../04-templates/SectionDifferentialsTpl';
import SectionLocationTpl from '../04-templates/SectionLocationTpl';
import SectionWhoWeAreTpl from '../04-templates/SectionWhoWeAreTpl';
import SectionWithImages from '../04-templates/SectionWithImages';

// Importando dados mockados

const HomePage = () => {
  return (
    <>
      <HeaderTpl
        {...headerData}
        iconName="Email"
        contactLinks={headerData.contactLinks.map((link, index) => ({
          ...link,
          iconName: index === 0 ? 'Email' : index === 1 ? 'Phone' : 'LocationOn',
        }))}
      />
      <SectionOurServicesOrg {...sectionData} />
      <SectionWhoWeAreTpl {...whoWeAreData} />
      <SectionContainerImageTpl image={separatorImageData} />
      <SectionDifferentialsTpl {...differentialData} />
      <SectionLocationTpl {...locationData} />
      <ContactForm phoneNumber={whatsappData.phoneNumber} />
      <SectionWithImages {...sectionWithImagesData} />
      <Footer
        socialMedia={socialMediaLinks.map(link => ({
          ...link,
          iconName: link.name as 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube',
        }))}
        {...footerData}
      />
      <WhatsAppButtonAtom {...whatsappData} />
    </>
  );
};

export default HomePage;
