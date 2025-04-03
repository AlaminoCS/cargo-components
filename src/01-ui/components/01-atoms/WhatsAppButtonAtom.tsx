<<<<<<< HEAD
/* global window */
=======
>>>>>>> feature/lgpd-policies
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  defaultMessage?: string;
}

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: '#25D366',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
}));

const WhatsAppButtonAtom: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  defaultMessage = 'Olá! Vim através do seu site e gostaria de mais informações.',
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Tooltip title="Fale conosco pelo WhatsApp" placement="left">
      <StyledFab color="primary" aria-label="whatsapp" onClick={handleClick}>
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </StyledFab>
    </Tooltip>
  );
};

export default WhatsAppButtonAtom;
