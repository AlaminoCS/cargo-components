import ContactNavMolecule from '../02-molecules/ContactNavMolecule'
import MainNavMolecule from '../02-molecules/MainNavMolecule'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const TopNavOrg = () => {

  const links = [
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

  return (
    <div>
      <ContactNavMolecule links={links} />
      <MainNavMolecule />
    </div>
  )
}

export default TopNavOrg
