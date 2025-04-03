import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      light: string;
      info: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
    };
    transitions: {
      default: string;
    };
    textAlign?: string;
  }
} 