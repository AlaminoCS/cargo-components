import { IService } from '../02-domain/interfaces/ISectionOurServices';

import { IMAGES } from './images';

export const ourServices: IService[] = [
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

export const sectionData = {
  sectionTitle: 'Conheça nossos serviços',
  services: ourServices,
  id: 'servicos',
};
