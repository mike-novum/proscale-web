import type { FC } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
  overflow: hidden;
`;

// const ScrollView = styled.div`
//   overflow: hidden;
//   overflow-y: scroll;
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

const PlaceholderImage = styled.img`
  width: 75vw;
  height: 75vw;
`;
const Copyright = styled.div`
  color: ${(props) => props.theme.colors.grayText};
  position: absolute;
  bottom: 8px;
  text-align: center;
  width: 100%;
  font-size: 10px;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.6;
  text-align: center;
`;
const Text = styled.h3`
  color: ${(props) => props.theme.colors.notification};
  text-align: center;
  font-size: 12px;
  padding: 0px 24px;
`;
export const MobileGuitarPage: FC = () => {
  return (
    <Content>
      <PlaceholderImage src="./mobile_not_found.svg" />
      <Header>Oops!</Header>
      <Text>
        Разработчик решил выкатить мобильную версию позже и пошел пить кофе...
      </Text>
      <Copyright>&copy; test</Copyright>
    </Content>
  );
};
