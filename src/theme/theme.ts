// theme.ts
import { createTheme } from '@mui/material/styles';
import themeConstants from './theme-constants';
import components from './components';

export const defaultTheme = createTheme(themeConstants); // 👈 named export

const customTheme = createTheme({
  ...themeConstants,
  components,
});

export default customTheme;
