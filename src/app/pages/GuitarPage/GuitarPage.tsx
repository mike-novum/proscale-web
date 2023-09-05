import type { FC } from 'react';
import { MobileGuitar, DesktopGuitar } from 'components';
import styled from 'styled-components';
import { useWindowSize } from 'lib/window';

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
      {isMobile === true ? <MobileGuitar /> : null}
      {isDesktop === true ? <DesktopGuitar /> : null}
    </Page>
  );
};
