import React, { useState } from 'react'
import { StyledButton, StyledCounter } from './Count.styles'

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <StyledButton onClick={() => setCount(count + 1)}>Click Me</StyledButton>
      <StyledCounter>{count}</StyledCounter>
    </>
  )
}

export default Count
