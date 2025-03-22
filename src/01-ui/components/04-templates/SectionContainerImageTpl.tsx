import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'
import ImageAtom from '../01-atoms/ImageAtom'

const SectionContainerImageTpl = () => {

  const IMAGES = {
    img1: new URL('../../../04-assets/images/imagem-separadora.jpg', import.meta.url).href,
  }


  
  const image: IImageAtom = {
    src: IMAGES.img1,
    alt: 'imagem separadora',
  }

  return (
    <>
      <ImageAtom src={image.src} alt={image.alt} />
    </>
  )
}

export default SectionContainerImageTpl
