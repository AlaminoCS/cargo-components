// src/theme/material-theme.ts
import { createTheme } from '@mui/material/styles';
import { cargoComponentsTheme } from './theme';

const theme = createTheme({
  palette: {
    primary: {
      main: cargoComponentsTheme.colors.primary, // Laranja principal
      contrastText: cargoComponentsTheme.colors.light, // Texto claro
    },
    secondary: {
      main: cargoComponentsTheme.colors.secondary, // Amarelo dourado
      contrastText: cargoComponentsTheme.colors.dark, // Texto escuro
    },
    error: {
      main: cargoComponentsTheme.colors.danger, // Vermelho perigo
    },
    warning: {
      main: cargoComponentsTheme.colors.warning, // Amarelo aviso
    },
    info: {
      main: cargoComponentsTheme.colors.info, // Azul informativo
    },
    success: {
      main: cargoComponentsTheme.colors.success, // Verde sucesso
    },
    text: {
      primary: cargoComponentsTheme.colors.text, // Texto primário
      secondary: cargoComponentsTheme.colors.dark, // Texto secundário
    },
    background: {
      default: cargoComponentsTheme.colors.background, // Fundo padrão
      paper: cargoComponentsTheme.colors.light, // Fundo dos componentes
    },
  },
  typography: {
    fontFamily: cargoComponentsTheme.fonts.main, // Fonte principal
    h1: {
      fontSize: cargoComponentsTheme.fontSizes.h1,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    h2: {
      fontSize: cargoComponentsTheme.fontSizes.h2,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    h3: {
      fontSize: cargoComponentsTheme.fontSizes.h3,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    h4: {
      fontSize: cargoComponentsTheme.fontSizes.h4,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    h5: {
      fontSize: cargoComponentsTheme.fontSizes.h5,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    h6: {
      fontSize: cargoComponentsTheme.fontSizes.h6,
      fontFamily: cargoComponentsTheme.fonts.heading,
    },
    body1: {
      fontSize: '1rem',
      fontFamily: cargoComponentsTheme.fonts.main,
    },
    body2: {
      fontSize: '0.875rem',
      fontFamily: cargoComponentsTheme.fonts.main,
    },
  },
  spacing: (factor: number) => `${parseInt(cargoComponentsTheme.spacing.medium) * factor}px`,
  shape: {
    borderRadius: parseInt(cargoComponentsTheme.borderRadius.small),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: cargoComponentsTheme.fonts.main,
          fontWeight: 600,
          transition: cargoComponentsTheme.transitions.default,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: cargoComponentsTheme.fonts.main,
          },
        },
      },
    },
  },
});

export default theme;