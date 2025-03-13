import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom'
import LinkAtom from '../01-atoms/LinkAtom'

const MainNavMolecule = () => {
  const linksAtom: IPropsLinkAtom[] = [
    {
      text: 'Quem somos',
      href: '#quem-somos',
    },
    {
      text: 'Nossos diferenciais',
      href: '#nossos-diferenciais',
    },
    {
      text: 'Serviços',
      href: '#servicos',
    },
    {
      text: 'Contato',
      href: '#contato',
    },
  ]

  return (
    <nav>
      {linksAtom.map((item: IPropsLinkAtom, index: number) => {
        return (
          <LinkAtom
            key={index}
            text={item.text}
            icon={item.icon}
            href={item.href}
          />
        )
      })}
    </nav>
  )
}

export default MainNavMolecule
