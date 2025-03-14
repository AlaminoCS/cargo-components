import BigImgCarousel from '../03-organisms/BigImgCarousel'
import TopNavOrg from '../03-organisms/TopNavOrg'
import { TopNavProvider } from '../../../05-contexts/TopNavContext'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeaderTpl = () => {

  const IMAGES = {
    logo : new URL('../../../04-assets/images/logo.png', import.meta.url).href
  }

  const contactLinks = [
    {
      text: 'contato@parkandco.com',
      href: 'mailto:contato@parkandco.com',
      icon: <EmailIcon />,
    },
    {
      text: '+55 11 98765-4321',
      href: 'tel:+5511987654321',
      icon: <PhoneIcon />,
    },
    {
      text: 'Rua dos Parques, 789',
      href: 'https://maps.google.com/?q=R.+dos+Parques,+789',
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

  const banners = [
    {
      imageUrl: 'https://via.placeholder.com/1200x400?text=Banner+1',
      title: 'Bem-vindo ao Park and Co',
      description: 'Descubra nossos serviços exclusivos.',
    },
    {
      imageUrl: 'https://via.placeholder.com/1200x400?text=Banner+2',
      title: 'Qualidade e Excelência',
      description: 'Trabalhamos para superar suas expectativas.',
    },
    {
      imageUrl: 'https://via.placeholder.com/1200x400?text=Banner+3',
      title: 'Entre em Contato',
      description: 'Estamos prontos para atender você!',
    },
  ];

  return (
    <TopNavProvider
      value={{
        contactLinks,
        mainLinks,
        logoSrc: IMAGES.logo,
      }}
    >
      <header>
        <TopNavOrg />
        <BigImgCarousel banners={banners} />
      </header>
    </TopNavProvider>
  )
}

export default HeaderTpl
