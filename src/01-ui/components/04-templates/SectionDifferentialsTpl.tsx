import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'
import ImageAtom from '../01-atoms/ImageAtom'
import ContentTitleTextMol from '../02-molecules/ContentTitleTextMol'

const SectionDifferentialsTpl = () => {
  const image: IImageAtom = {
    src: '#',
    alt: 'Diferenciais',
  }

  return (
    <section>
      <ImageAtom src={image.src} alt={image.alt} />
      <ContentTitleTextMol
        title="Diferenciais"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga esse sunt voluptates, magnam aspernatur unde maiores repellat vel necessitatibus animi, officiis voluptate vero natus id in sequi possimus porro nemo."
      />
    </section>
  )
}

export default SectionDifferentialsTpl
