interface ITitleProps {
  text: string
}

const TitleAtom: React.FC<ITitleProps> = (props) => {
  const { text } = props

  return <h1>{text}</h1>
}

export default TitleAtom
