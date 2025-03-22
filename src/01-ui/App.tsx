import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cargoComponentsTheme } from './styles/theme'
import HomePage from './components/05-pages/HomePage'
import '../04-assets/styles/reset.css';
import GlobalStyles from '../styles/GlobalStyles';

const App: React.FC = () => (
  <ThemeProvider theme={cargoComponentsTheme}>
    <GlobalStyles />
    <HomePage />
  </ThemeProvider>
)

export default App
