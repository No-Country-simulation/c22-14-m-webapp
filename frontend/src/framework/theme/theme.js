import { createTheme } from '@mui/material';
import { colors } from './styles/colors';
import { typography } from './styles/typography';
import { components } from './styles/components';

const theme = createTheme({
  ...colors,
  ...typography,
  ...components
});

export { theme }