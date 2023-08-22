import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { DemoStand } from 'ui/demo';

// import { GuitarPage } from './pages';
import { megaTheme } from './theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={megaTheme}>
      {/* <GuitarPage /> */}
      <DemoStand />
    </ThemeProvider>
  );
};
