import type { FC } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const ScrollView = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MobileGuitarPage: FC = () => {
  return (
    <ScrollView>
      <Content>Soon</Content>
    </ScrollView>
  );
};
