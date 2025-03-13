import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'
import ImageAtom from '../01-atoms/ImageAtom'
import ContentTitleTextMol from '../02-molecules/ContentTitleTextMol'

const SectionWhoWeAreTpl = () => {
  const image: IImageAtom = {
    src: '#',
    alt: 'quem somos',
  }

  return (
    <section>
      <ContentTitleTextMol
        title="Quem somos"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat rem perspiciatis! Exercitationem iure ratione dolore aperiam, molestias magni, delectus possimus reprehenderit ut, similique ipsum minus? Voluptates veniam voluptas deleniti!"
      />
      <ImageAtom src={image.src} alt={image.alt} />
    </section>
  )
}

export default SectionWhoWeAreTpl
