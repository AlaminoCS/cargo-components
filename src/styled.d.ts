import 'styled-components';
import { Theme } from './02-domain/interfaces/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
