import { ISectionWhoWeAreProps } from '../02-domain/interfaces/ISectionWhoWeAreProps';

import { IMAGES } from './images';

export const whoWeAreData: ISectionWhoWeAreProps = {
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
