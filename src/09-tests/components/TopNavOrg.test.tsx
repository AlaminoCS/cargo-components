import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TopNavProvider } from '../../05-contexts/TopNavContext';
import TopNavOrg from '../../01-ui/components/03-organisms/TopNavOrg';
import { IContactLink, IMainLink } from '../../02-domain/interfaces/IHeaderProps';

describe('TopNavOrg', () => {
  const mockContactLinks: IContactLink[] = [
    { text: 'Contact 1', href: '#contact1', iconName: 'Phone' },
    { text: 'Contact 2', href: '#contact2', iconName: 'Email' }
  ];

  const mockMainLinks: IMainLink[] = [
    { text: 'Link 1', href: '#link1' },
    { text: 'Link 2', href: '#link2' }
  ];

  const mockLogoSrc = 'https://example.com/logo.png';

  const renderWithContext = (ui: React.ReactElement) => {
    return render(
      <TopNavProvider
        value={{
          contactLinks: mockContactLinks,
          mainLinks: mockMainLinks,
          logoSrc: mockLogoSrc
        }}
      >
        {ui}
      </TopNavProvider>
    );
  };

  it('should render with correct styles', () => {
    renderWithContext(<TopNavOrg />);
    
    const navBox = screen.getByTestId('top-nav-box');
    expect(navBox).toHaveStyle({
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1000',
      backgroundColor: '#fff'
    });
  });

  it('should render ContactNavMolecule with correct props', () => {
    renderWithContext(<TopNavOrg />);
    
    const contactNav = screen.getByTestId('contact-nav');
    expect(contactNav).toBeInTheDocument();
  });

  it('should render MainNavMolecule with correct props', () => {
    renderWithContext(<TopNavOrg />);
    
    const mainNav = screen.getByTestId('main-nav');
    expect(mainNav).toBeInTheDocument();
  });
}); 