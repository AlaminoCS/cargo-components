import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, Box } from '@mui/material';
import React from 'react';

import { IPropsLinkAtom } from '../../../02-domain/interfaces/ILinkAtom';

const iconMap = {
  Email: EmailIcon,
  Phone: PhoneIcon,
  LocationOn: LocationOnIcon,
};

const LinkAtom: React.FC<IPropsLinkAtom> = ({ text, iconName, href, target }) => {
  const IconComponent = iconName ? iconMap[iconName as keyof typeof iconMap] : null;

  return (
    <Link
      href={href}
      target={target}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    >
      {IconComponent && <Box component={IconComponent} sx={{ fontSize: '1.2rem' }} />}
      {text}
    </Link>
  );
};

export default LinkAtom;
