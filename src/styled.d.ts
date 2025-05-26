// src/styled.d.ts
import 'styled-components';
import { theme } from './theme';

// tell styled-components what our theme shape is
declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
