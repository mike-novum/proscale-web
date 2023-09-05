import type { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderImage = styled.img`
  width: 75vw;
  height: 75vw;
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

interface PagePlaceholderProps {
  text: string;
}

export const PagePlaceholder: FC<PagePlaceholderProps> = ({ text }) => {
  return (
    <Wrapper>
      <PlaceholderImage src="./mobile_not_found.svg" />
      <Header>Oops!</Header>
      <Text>
        {text ||
          'Разработчик решил выкатить мобильную версию позже и пошел пить кофе...'}
      </Text>
    </Wrapper>
  );
};
