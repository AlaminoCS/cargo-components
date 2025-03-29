import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionOurServicesOrg from '../../01-ui/components/03-organisms/SectionOurServicesOrg';

describe('SectionOurServicesOrg', () => {
  const mockServices = [
    {
      title: 'Service 1',
      description: 'Description 1',
      icon: 'icon1',
      image: 'https://example.com/image1.jpg'
    },
    {
      title: 'Service 2',
      description: 'Description 2',
      icon: 'icon2',
      image: 'https://example.com/image2.jpg'
    }
  ];

  const defaultProps = {
    services: mockServices,
    id: 'services-section'
  };

  it('should render with default title', () => {
    render(<SectionOurServicesOrg {...defaultProps} />);
    
    expect(screen.getByText('Nossos serviços')).toBeInTheDocument();
  });

  it('should render with custom title', () => {
    const customTitle = 'Custom Services Title';
    render(<SectionOurServicesOrg {...defaultProps} sectionTitle={customTitle} />);
    
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('should render section with correct id', () => {
    render(<SectionOurServicesOrg {...defaultProps} />);
    
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'services-section');
  });

  it('should render ContentCarouselMol with services prop', () => {
    render(<SectionOurServicesOrg {...defaultProps} />);
    
    // Verifica se o componente ContentCarouselMol está presente
    const carousel = screen.getByTestId('content-carousel');
    expect(carousel).toBeInTheDocument();
  });
}); 