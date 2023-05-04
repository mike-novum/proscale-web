import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GuitarPage } from './pages';
import { theme } from './theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GuitarPage />
    </ThemeProvider>
  );
};
