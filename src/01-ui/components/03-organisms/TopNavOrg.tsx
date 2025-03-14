import ContactNavMolecule from '../02-molecules/ContactNavMolecule'
import MainNavMolecule from '../02-molecules/MainNavMolecule'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const TopNavOrg = () => {

  const IMAGES = {
      logo : new URL('../../../04-assets/images/logo.png', import.meta.url).href
  }

  const contactLinks = [
    {
      text: 'contato@pizzaparty.com',
      href: 'mailto:contato@pizzaparty.com',
      icon: <EmailIcon />,
    },
    {
      text: '+55 11 99999-9999',
      href: 'tel:+5511999999999',
      icon: <PhoneIcon />,
    },
    {
      text: 'Rua das Pizzas, 456',
      href: 'https://maps.google.com/?q=R.+das+Pizzas,+456',
      icon: <LocationOnIcon />,
    },
  ];

  const mainLinks = [
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
  ];

  return (
    <div>
      <ContactNavMolecule links={contactLinks} />
      <MainNavMolecule links={mainLinks} logoSrc={IMAGES.logo} />
    </div>
  )
}

export default TopNavOrg
