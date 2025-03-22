import SectionWithImage from '../03-organisms/SectionWithImage';
import { ISectionWithImage } from '../../../02-domain/interfaces/ISectionWithImage'

const SectionWhoWeAreTpl = () => {

  const IMAGES = {
    img1: new URL('../../../04-assets/images/quem-somos.jpg', import.meta.url).href,
  }

  const sectionData: ISectionWithImage = {
    imagePosition: 'right', 
    title: 'Quem somos',
    description: `
      <p>
        O <strong>Park&Co</strong> está no mercado desde 2016 e vem entendendo as necessidades dos clientes a 
        cada dia onde já coleciona cases importantes de sucesso com o atendimento em grandes 
        centros de referência em clinicas médicas, prédios comerciais,hospitais e academias 
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
      src: IMAGES.img1,
      alt: 'Quem somos',
    },
  };

  return <SectionWithImage {...sectionData} />;
}

export default SectionWhoWeAreTpl
