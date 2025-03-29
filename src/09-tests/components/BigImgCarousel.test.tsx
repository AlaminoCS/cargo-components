import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BigImgCarousel from '../../01-ui/components/03-organisms/BigImgCarousel';

describe('BigImgCarousel', () => {
  const mockBanners = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      title: 'Banner 1',
      description: 'Description 1'
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      title: 'Banner 2',
      description: 'Description 2'
    }
  ];

  it('should render all banners', () => {
    render(<BigImgCarousel banners={mockBanners} />);
    
    // Verifica se todos os títulos estão presentes
    mockBanners.forEach(banner => {
      expect(screen.getByText(banner.title)).toBeInTheDocument();
      expect(screen.getByText(banner.description)).toBeInTheDocument();
    });
  });

  it('should render images with correct attributes', () => {
    render(<BigImgCarousel banners={mockBanners} />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockBanners.length);
    
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', mockBanners[index].imageUrl);
      expect(img).toHaveAttribute('alt', mockBanners[index].title);
    });
  });

  it('should render carousel container with correct styles', () => {
    render(<BigImgCarousel banners={mockBanners} />);
    
    const container = screen.getByTestId('carousel-container');
    expect(container).toHaveStyle({
      width: '100%',
      maxWidth: '1200px',
      marginTop: '113px'
    });
  });

  it('should render empty carousel when no banners provided', () => {
    render(<BigImgCarousel banners={[]} />);
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
}); 