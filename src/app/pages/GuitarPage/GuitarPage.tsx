import type { FC } from 'react';
import styled from 'styled-components';

import { useWindowSize } from '../../utils/window';
import { MobileGuitarPage } from './components/MobileGuitar';
import { DesktopGuitarPage } from './components/DesktopGuitar';

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

export const GuitarPage: FC = () => {
  const { isMobile, isDesktop } = useWindowSize();

  return (
    <Page>
      {isMobile === true ? <MobileGuitarPage /> : null}
      {isDesktop === true ? <DesktopGuitarPage /> : null}
    </Page>
  );
};
