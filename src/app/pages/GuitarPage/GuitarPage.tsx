import type { FC } from 'react';
import styled from 'styled-components';

import { useWindowSize } from '../../utils/window';
import { MobileGuitarPage } from './components/MobileGuitar';
import { DesktopGuitarPage } from './components/DesktopGuitar';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GuitarPage: FC = () => {
  const { isMobile } = useWindowSize();

  return (
    <Page>
      {isMobile === true ? <MobileGuitarPage /> : <DesktopGuitarPage />}
    </Page>
  );
};
