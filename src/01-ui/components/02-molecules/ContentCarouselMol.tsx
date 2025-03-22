// src/01-ui/components/02-molecules/ContentCarouselMol.tsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { IOurServices } from '../../../02-domain/interfaces/IOurServices';

// Props do componente
interface ContentCarouselMolProps {
  services: IOurServices[];
}

// Estilização do carrossel
const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;

  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: stretch;
  }

  .slick-list {
    overflow: hidden;
  }

  .card {
    background-color: ${(props) => props.theme.colors.background};    
    text-align: center;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .content {
      padding: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: ${(props) => props.theme.borderRadius.medium};
    }

    h2 {
      font-size: 1.8rem;
      margin: ${(props) => props.theme.spacing.medium} 0;
    }

    p {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

const ContentCarouselMol: React.FC<ContentCarouselMolProps> = ({ services }) => {
  // Configurações do Slick Carousel
  const settings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição (ms)
    slidesToShow: 3, // Número de slides visíveis
    slidesToScroll: 1, // Número de slides para rolar
    autoplay: true, // Reprodução automática
    autoplaySpeed: 3000, // Intervalo entre slides (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {services.map((item, index) => (
          <div className="card" key={index}>
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className='content'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>            
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ContentCarouselMol;