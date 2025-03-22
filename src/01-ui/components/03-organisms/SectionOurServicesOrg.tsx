// src/01-ui/components/03-organisms/SectionOurServicesOrg.tsx
import React from 'react';
import TitleAtom from '../01-atoms/TitleAtom';
import ContentCarouselMol from '../02-molecules/ContentCarouselMol';

const SectionOurServicesOrg: React.FC = () => {
  const ourServices = [
    {
      image: 'https://via.placeholder.com/300x200?text=Administração+de+Garagem',
      title: 'Administração de garagem',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Vallet+e+SelfPark',
      title: 'Vallet e SelfPark',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Implantação',
      title: 'Implantação',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequuntur fuga officia sit ab deserunt quod est distinctio nihil nostrum esse fugit quam voluptatem tempore, eum hic aut placeat magnam.',
    },
  ];

  return (
    <section>
      <TitleAtom text="Nossos serviços" />
      <ContentCarouselMol services={ourServices} />
    </section>
  );
};

export default SectionOurServicesOrg;