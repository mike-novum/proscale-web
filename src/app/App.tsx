import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GuitarPage } from './pages';
import { defaultTheme } from './theme';
import 'app.css';

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GuitarPage />
    </ThemeProvider>
  );
};
