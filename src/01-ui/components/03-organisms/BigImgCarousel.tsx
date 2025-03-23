import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// Tipagem dos dados do banner
interface Banner {
  imageUrl: string; // URL da imagem de fundo
  title: string; // Título do banner
  description: string; // Descrição do banner
}

// Props do componente
interface BigImgCarouselProps {
  banners: Banner[]; // Array de banners
}

// Estilização do carrossel
const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 113px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: 100%; 
    }
  }

  .banner {
    position: relative;
    height: 400px;
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    overflow: hidden; /* Garante que o conteúdo não ultrapasse o banner */

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;    
    }

    h2, p {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 2;      
      padding: 10px 20px;
      color: #fff;
    }

    h2 {
      font-size: 3rem;
      bottom: 60px;      
    }

    p {
      font-size: 1.6rem;
      bottom: 20px;
    }
  }
`;

const BigImgCarousel: React.FC<BigImgCarouselProps> = ({ banners }) => {
  // Configurações do Slick Carousel
  const settings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição (ms)
    slidesToShow: 1, // Número de slides visíveis
    slidesToScroll: 1, // Número de slides para rolar
    autoplay: true, // Reprodução automática
    autoplaySpeed: 3000, // Intervalo entre slides (ms)
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner">
            <img src={banner.imageUrl} alt={banner.title} />
              <Typography variant="h2" align="center" gutterBottom>
                {banner.title}
              </Typography>
            <p>{banner.description}</p>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default BigImgCarousel;