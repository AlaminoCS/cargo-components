// src/components/05-pages/HomePage.tsx
import React from 'react';
import SectionOurServicesOrg from '../03-organisms/SectionOurServicesOrg';
import HeaderTpl from '../04-templates/HeaderTpl';
import SectionContainerImageTpl from '../04-templates/SectionContainerImageTpl';
import SectionDifferentialsTpl from '../04-templates/SectionDifferentialsTpl';
import SectionLocationTpl from '../04-templates/SectionLocationTpl';
import SectionWhoWeAreTpl from '../04-templates/SectionWhoWeAreTpl';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ISectionOurServicesProps, IService } from '../../../02-domain/interfaces/ISectionOurServices';
import { ISectionDifferentialsProps } from '../../../02-domain/interfaces/ISectionDifferentialsProps';
import { ISectionWhoWeAreProps } from '../../../02-domain/interfaces/ISectionWhoWeAreProps';
import ContactForm from '../04-templates/ContactForm';
import SectionWithImages from '../04-templates/SectionWithImages'; // Importa o novo componente

const HomePage = () => {
  const IMAGES = {
    logo: new URL('../../../04-assets/images/logo.png', import.meta.url).href,
    banner: new URL('../../../04-assets/images/banner.png', import.meta.url).href,
    banner1: new URL('../../../04-assets/images/banner.jpg', import.meta.url).href,
    banner2: new URL('../../../04-assets/images/banner2.jpg', import.meta.url).href,
    banner3: new URL('../../../04-assets/images/banner3.jpg', import.meta.url).href,
    servicos1: new URL('../../../04-assets/images/nossos-servicos.jpg', import.meta.url).href,
    servicos2: new URL('../../../04-assets/images/nossos-servicos-2.jpg', import.meta.url).href,
    servicos3: new URL('../../../04-assets/images/nossos-servicos-3.jpg', import.meta.url).href,
    separadora: new URL('../../../04-assets/images/imagem-separadora.jpg', import.meta.url).href,
    diferenciais: new URL('../../../04-assets/images/diferenciais.jpg', import.meta.url).href,
    quemSomos: new URL('../../../04-assets/images/quem-somos.jpg', import.meta.url).href,
    imagem1: new URL('../../../04-assets/images/imagem1.jpg', import.meta.url).href,
    imagem2: new URL('../../../04-assets/images/imagem2.jpg', import.meta.url).href,
    imagem3: new URL('../../../04-assets/images/imagem3.jpg', import.meta.url).href,
    imagem4: new URL('../../../04-assets/images/imagem4.jpg', import.meta.url).href,
  };

  const contactLinks = [
    {
      text: 'contato@parkandco.com',
      href: 'mailto:contato@parkandco.com',
      icon: <EmailIcon />,
    },
    {
      text: '+55 11 98765-4321',
      href: 'tel:+5511987654321',
      icon: <PhoneIcon />,
    },
    {
      text: 'Rua dos Parques, 789',
      href: 'https://maps.google.com/?q=R.+dos+Parques,+789',
      icon: <LocationOnIcon />,
    },
  ];

  const mainLinks = [
    {
      text: 'Quem somos',
      href: '#quem-somos',
    },
    {
      text: 'Nossos diferenciais',
      href: '#nossos-diferenciais',
    },
    {
      text: 'Serviços',
      href: '#servicos',
    },
    {
      text: 'Onde estamos',
      href: '#localizacao',
    },
    {
      text: 'Contato',
      href: '#contato',
    },
  ];

  const banners = [
    {
      imageUrl: IMAGES.banner1,
      title: 'Bem-vindo ao Park and Co',
      description: 'Descubra nossos serviços exclusivos.',
    },
    {
      imageUrl: IMAGES.banner2,
      title: 'Qualidade e Excelência',
      description: 'Trabalhamos para superar suas expectativas.',
    },
    {
      imageUrl: IMAGES.banner3,
      title: 'Entre em Contato',
      description: 'Estamos prontos para atender você!',
    },
  ];

  const headerData = {
    contactLinks,
    mainLinks,
    logoSrc: IMAGES.logo,
    banners,
  };

  const locationData = {
    title: 'Onde estamos',
    text: 'Avenida Comendador Pereira Inácio, 900 - Jardim Vergueiro, Sorocaba/SP',
    map: {
      title: 'Localização no Google Maps',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5213618891225!2d-47.458225425423954!3d-23.513743559843032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a84ebf90e83%3A0xaaba7d54565fad40!2sAv.%20Comendador%20Pereira%20In%C3%A1cio%2C%20900%20-%20Jardim%20Vergueiro%2C%20Sorocaba%20-%20SP%2C%2018030-005!5e0!3m2!1spt-BR!2sbr!4v1741374513958!5m2!1spt-BR!2sbr',
    },
    id: 'localizacao',
  };

  const ourServices: IService[] = [
    {
      image: IMAGES.servicos1,
      title: 'Administração de garagem',
      description:
        'Possuímos o que há de melhor em tecnologia e infraestrutura para garantir que o estacionamento de seu empreendimento traga conforto e segurança a seu cliente.',
    },
    {
      image: IMAGES.servicos2,
      title: 'Vallet e SelfPark',
      description:
        'O atendimento de vallet oferecido pela Park&Co está disponível para qualquer tipo de serviço, com profissionais treinados para garantir excelência no atendimento.',
    },
    {
      image: IMAGES.servicos3,
      title: 'Implantação',
      description:
        'Oferecemos um serviço completo de implantação de sistemas de estacionamento, desde a análise inicial até a execução e treinamento da equipe.',
    },
  ];

  const sectionData: ISectionOurServicesProps = {
    sectionTitle: 'Conheça nossos serviços',
    services: ourServices,
    id: 'servicos',
  };

  const imageData = {
    src: IMAGES.separadora,
    alt: 'Imagem separadora',
  };

  const differentialData: ISectionDifferentialsProps = {
    sectionData: {
      imagePosition: 'left',
      title: 'Diferenciais',
      description: `
        <p>
          Gestão Transparente
        </p>
  
        <p>
          Em nossas operações, buscamos a proximidade de contratantes, colaboradores e clientes final.​
          Acreditamos que somente assim, ofereceremos uma gestão confortável e segura aos usuários.
        </p>
  
        <p>
          Tecnologias de Ponta
        </p>
  
        <p>
          Estamos sempre antenados ao mercado e buscamos oferecer as mais novas tecnologias 
          para as nossas operações.
        </p>
  
        <p>
          Capital Humano
        </p>
  
        <p>
          Em nossa base, priorizamos o bem estar e cuidado com nossos colabooradores, pois vemos 
          eles como base, onde se consolidam o bom atendimento e um bom funcionamento das operações.
        </p>
  
        <p>
          Melhorias Contínuas
        </p>
  
        <p>
          Não temos medo de mudanças. Buscamos sempre reavaliar processos para que sempre 
          haja melhorias nos pátios.
        </p>
      `,
      image: {
        src: IMAGES.diferenciais,
        alt: 'Diferenciais',
      },
      id: 'nossos-diferenciais',
    },
  };

  const whoWeAreData: ISectionWhoWeAreProps = {
    sectionData: {
      imagePosition: 'right',
      title: 'Quem somos',
      description: `
        <p>
          O <strong>Park&Co</strong> está no mercado desde 2016 e vem entendendo as necessidades dos clientes a 
          cada dia onde já coleciona cases importantes de sucesso com o atendimento em grandes 
          centros de referência em clínicas médicas, prédios comerciais, hospitais e academias 
          de ginástica como parceiros de trabalho, o que nos capacitou cada vez mais a oferecer 
          o melhor serviço para sua empresa.
        </p>
        <p>
          A empresa <strong>Park&Co</strong> é especializada no ramo de gestão de estacionamentos e garagens 
          onde busca primeiramente o conforto para seus clientes, segurança em confiar 
          seus veículos a nós, além da excelência no atendimento, tornando assim, uma 
          experiência diferenciada aos frequentadores.
        </p>
      `,
      image: {
        src: IMAGES.quemSomos,
        alt: 'Quem somos',
      },
      id: 'quem-somos',
    },
  };

  const sectionWithImagesText =
    'O Park & Co. oferece uma diversidade de ações para seus clientes, contando com as tecnologias mais avançadas disponíveis para administração de estacionamento. Proporcionamos a todos maior conforto, segurança e acessibilidade. Realizamos serviços de implantação, viabilidade, otimização de espaço para que sua área seja rentável e bem aproveitada.';

  const sectionWithImagesImages = [
    IMAGES.imagem1,
    IMAGES.imagem2,
    IMAGES.imagem3,
    IMAGES.imagem4,
  ];

  return (
    <>
      <HeaderTpl {...headerData} />
      <SectionOurServicesOrg {...sectionData} />
      <SectionWhoWeAreTpl {...whoWeAreData} />
      <SectionContainerImageTpl image={imageData} />
      <SectionDifferentialsTpl {...differentialData} />
      <SectionLocationTpl {...locationData} />
      <ContactForm phoneNumber="5515981377293" />
      <SectionWithImages text={sectionWithImagesText} images={sectionWithImagesImages} />
    </>
  );
};

export default HomePage;