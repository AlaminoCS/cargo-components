import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionWithImage from '../../01-ui/components/03-organisms/SectionWithImage';

describe('SectionWithImage', () => {
  const mockImage = {
    src: 'https://example.com/image.jpg',
    alt: 'Test Image'
  };

  const defaultProps = {
    title: 'Test Title',
    description: '<p>Test Description</p>',
    image: mockImage,
    id: 'test-section'
  };

  it('should render with image on the left', () => {
    render(<SectionWithImage {...defaultProps} imagePosition="left" />);
    
    const imageContainer = screen.getByTestId('image-container');
    const content = screen.getByTestId('content');
    
    // Verifica a ordem dos elementos
    expect(imageContainer.compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    
    // Verifica o conteúdo
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockImage.src);
    expect(screen.getByRole('img')).toHaveAttribute('alt', mockImage.alt);
  });

  it('should render with image on the right', () => {
    render(<SectionWithImage {...defaultProps} imagePosition="right" />);
    
    const content = screen.getByTestId('content');
    const imageContainer = screen.getByTestId('image-container');
    
    // Verifica a ordem dos elementos
    expect(content.compareDocumentPosition(imageContainer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    
    // Verifica o conteúdo
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockImage.src);
    expect(screen.getByRole('img')).toHaveAttribute('alt', mockImage.alt);
  });

  it('should render HTML content in description', () => {
    const htmlDescription = '<p>Test <strong>HTML</strong> Description</p>';
    render(<SectionWithImage {...defaultProps} description={htmlDescription} imagePosition="left" />);
    
    const descriptionElement = screen.getByText('Test HTML Description');
    expect(descriptionElement).toBeInTheDocument();
  });
}); 