import React from 'react'

interface HeaderProps {
  content: string
}

const Header: React.FC<HeaderProps> = ({content}) => {
  return (
    <header>
      {content}
    </header>
  )
}

export default Header
