// src/01-ui/components/04-templates/SectionLocationTpl.tsx
import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

import { ISectionLocation } from '../../../02-domain/interfaces/ISectionLocation';
import MapAtom from '../01-atoms/MapAtom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const StyledSlider = styled(Slider)(({ theme }) => ({
  '.slick-dots': {
    bottom: '-40px',
    '& li button:before': {
      fontSize: '12px',
      color: theme.palette.primary.main,
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
  '.slick-prev, .slick-next': {
    zIndex: 1,
    width: '40px',
    height: '40px',
    '&:before': {
      display: 'none',
    },
  },
  '.slick-prev': {
    left: '-50px',
    [theme.breakpoints.down('md')]: {
      left: '-30px',
    },
  },
  '.slick-next': {
    right: '-50px',
    [theme.breakpoints.down('md')]: {
      right: '-30px',
    },
  },
}));

const NextArrow = (props: any) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      <NavigateNextIcon sx={{ color: 'white' }} />
    </Box>
  );
};

const PrevArrow = (props: any) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      <NavigateBeforeIcon sx={{ color: 'white' }} />
    </Box>
  );
};

const SectionLocationTpl: React.FC<ISectionLocation> = ({ title, locations, id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section>
      <Box
        id={id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            {title}
          </Typography>

          <Box sx={{ position: 'relative', mx: { md: 6 } }}>
            <StyledSlider {...settings}>
              {locations.map((location, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <Typography variant="h3" align="left" gutterBottom>
                    {location.title}
                  </Typography>
                  <Typography variant="body1" align="left" paragraph>
                    {location.text}
                  </Typography>
                  <MapAtom title={location.map.title} src={location.map.src} />
                </Box>
              ))}
            </StyledSlider>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default SectionLocationTpl;
