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
        'Oferecemos um serviço completo de implantação de sistemas de estacionamento, desde a análise inicial até a execução e treinamento da equipe. Nossa equipe especializada garante que a infraestrutura seja instalada de forma eficiente e personalizada, atendendo às necessidades específicas do seu negócio. Com tecnologia de ponta e suporte contínuo, asseguramos a máxima eficiência e satisfação dos clientes.',    
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