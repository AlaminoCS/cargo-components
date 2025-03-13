import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'
import ImageAtom from '../01-atoms/ImageAtom'

const SectionContainerImageTpl = () => {
  const image: IImageAtom = {
    src: '#',
    alt: 'imagem separadora',
  }

  return (
    <>
      <ImageAtom src={image.src} alt={image.alt} />
    </>
  )
}

export default SectionContainerImageTpl
