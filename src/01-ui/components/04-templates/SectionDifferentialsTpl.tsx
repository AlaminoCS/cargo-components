import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'
import ImageAtom from '../01-atoms/ImageAtom'
import ContentTitleTextMol from '../02-molecules/ContentTitleTextMol'
import SectionWithImage from '../03-organisms/SectionWithImage';
import { ISectionWithImage } from '../../../02-domain/interfaces/ISectionWithImage'

const SectionDifferentialsTpl = () => {

  const IMAGES = {
    img1: new URL('../../../04-assets/images/diferenciais.jpg', import.meta.url).href,
  }
  
  const sectionData: ISectionWithImage = {
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
      src: IMAGES.img1,
      alt: 'Quem somos',
    },
  };

  return <SectionWithImage {...sectionData} />;
}

export default SectionDifferentialsTpl
