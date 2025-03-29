import { ISectionDifferentialsProps } from '../02-domain/interfaces/ISectionDifferentialsProps';

import { IMAGES } from './images';

export const differentialData: ISectionDifferentialsProps = {
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

      <p>
        Atendimento Personalizado
      </p>

      <p>
        Soluções sob medida para cada cliente
      </p>
    `,
    image: {
      src: IMAGES.diferenciais,
      alt: 'Diferenciais',
    },
    id: 'nossos-diferenciais',
  },
};
