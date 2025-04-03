import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/material';
import React from 'react';

const iconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

interface ISocialMediaIconProps {
  iconName: keyof typeof iconMap;
}

const SocialMediaIcon: React.FC<ISocialMediaIconProps> = ({ iconName }) => {
  const IconComponent = iconMap[iconName];

  return <Box component={IconComponent} sx={{ fontSize: '1.5rem' }} />;
};

export default SocialMediaIcon;
