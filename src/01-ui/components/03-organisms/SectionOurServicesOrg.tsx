// src/01-ui/components/03-organisms/SectionOurServicesOrg.tsx
import React from 'react';
import TitleAtom from '../01-atoms/TitleAtom';
import ContentCarouselMol from '../02-molecules/ContentCarouselMol';

const SectionOurServicesOrg: React.FC = () => {

  const IMAGES = {
    img1: new URL('../../../04-assets/images/nossos-servicos.jpg', import.meta.url).href,
    img2: new URL('../../../04-assets/images/nossos-servicos-2.jpg', import.meta.url).href,
    img3: new URL('../../../04-assets/images/nossos-servicos-3.jpg', import.meta.url).href,
  }

  const ourServices = [
    {
      image: IMAGES.img1,
      title: 'Administração de garagem',
      description:
        'Possuímos o que há de melhor em tecnologia e infraestrutura para garantir que o estacionamento de seu empreendimento traga conforto e segurança a seu cliente. Dispomos de diferentes modelos de administração para sua garagem, onde você escolhe o modelo mais viável para seu negócio.',
    },
    {
      image: IMAGES.img2,
      title: 'Vallet e SelfPark',
      description:
        'O atendimento de vallet oferecido pela Park&Co, está disponível para qualquer tipo serviço. Na modalidade de Vallet, contamos com profissionais treinados para garantir a excelência no atendimento. O Vallet pode ser o diferencial que faltava para seu negócio. Já na modalidade Self Park, realizamos todo estudo comportamental dos clientes para entendendimento da funcionalidade da garagem, entregando um conforto ao estacionarem seus veículos, sempre com a supervisão da equipe de orientadores.',
    },
    {
      image: IMAGES.img3,
      title: 'Implantação',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',    },
  ];

  return (
    <section>
      <TitleAtom text="Nossos serviços" />
      <ContentCarouselMol services={ourServices} />
    </section>
  );
};

export default SectionOurServicesOrg;