import { IContentTitleTextMol } from '../../../02-domain/interfaces/IContentTitleTextMol'
import TitleAtom from '../01-atoms/TitleAtom'

const ContentTitleTextMol: React.FC<IContentTitleTextMol> = (props) => {
  const { title, text } = props

  return (
    <div>
      <TitleAtom text={title} />
      <p>{text}</p>
    </div>
  )
}

export default ContentTitleTextMol
