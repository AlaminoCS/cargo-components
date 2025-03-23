import { Typography } from "@mui/material"

interface ITitleProps {
  text: string
}

const TitleAtom: React.FC<ITitleProps> = (props) => {
  const { text } = props

  return (
    <Typography variant="h1" align="left" gutterBottom>
      {text}
    </Typography>
  )
}

export default TitleAtom
