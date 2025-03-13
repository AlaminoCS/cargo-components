import React from 'react'
import { IImageAtom } from '../../../02-domain/interfaces/IImageAtom'

const ImageAtom: React.FC<IImageAtom> = (props) => {
  const { src, alt, figCaption } = props

  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{figCaption}</figcaption>
    </figure>
  )
}

export default ImageAtom
