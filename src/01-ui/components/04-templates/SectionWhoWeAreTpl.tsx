import SectionWithImage from '../03-organisms/SectionWithImage';
import { ISectionWithImage } from '../../../02-domain/interfaces/ISectionWithImage'

const SectionWhoWeAreTpl = () => {
  const sectionData: ISectionWithImage = {
    imagePosition: 'right', 
    title: 'Quem somos',
    description: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat rem perspiciatis!</p>
      <ul>
        <li>Exercitationem iure ratione dolore aperiam.</li>
        <li>Molestias magni, delectus possimus reprehenderit ut.</li>
        <li>Similique ipsum minus? Voluptates veniam voluptas deleniti!</li>
      </ul>
    `,
    image: {
      src: '/assets/images/about-us.jpg',
      alt: 'Quem somos',
    },
  };

  return <SectionWithImage {...sectionData} />;
}

export default SectionWhoWeAreTpl
