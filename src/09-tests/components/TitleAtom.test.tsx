import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TitleAtom from '../../01-ui/components/01-atoms/TitleAtom';

describe('TitleAtom', () => {
  it('should render the title text correctly', () => {
    const testText = 'Test Title';
    render(<TitleAtom text={testText} />);

    const titleElement = screen.getByText(testText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });

  it('should render with left alignment', () => {
    const testText = 'Test Title';
    render(<TitleAtom text={testText} />);

    const titleElement = screen.getByText(testText);
    expect(titleElement).toHaveStyle({ textAlign: 'left' });
  });
});
