import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

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

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner {
    position: relative;
    height: 400px;
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 20px;

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
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
          <div key={index} className="banner" style={{ backgroundImage: `url(${banner.imageUrl})` }}>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default BigImgCarousel;