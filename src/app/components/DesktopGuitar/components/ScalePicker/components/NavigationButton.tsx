import { useCallback, type CSSProperties, type FC } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';
import { defaultTheme } from 'theme';
import { ArrowBack, ArrowForward } from 'ui/Icons';

const NavigationButtonWrapper = styled.button<{ direction: 'next' | 'prev' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background: ${(props) =>
    props.direction === 'prev'
      ? 'linear-gradient(270deg, transparent, rgb(44, 44, 63))'
      : 'linear-gradient(90deg, transparent, rgb(44, 44, 63))'};
  z-index: 111;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 200ms;
  padding: 0;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.7;
  }

  border-radius: ${(props) =>
    props.direction === 'prev' ? '20px 0px 0px 20px' : '0px 20px 20px 0px'};

  @media (max-height: 1024px) {
    border-radius: ${(props) =>
      props.direction === 'prev' ? '16px 0px 0px 16px' : '0px 16px 16px 0px'};
  }

  @media (max-height: 768px) {
    border-radius: ${(props) =>
      props.direction === 'prev' ? '12px 0px 0px 12px' : '0px 12px 12px 0px'};
  }
`;

interface NavigationButtonProps {
  type: 'next' | 'prev';
  style?: CSSProperties;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  style,
  type,
}) => {
  const swiper = useSwiper();

  const wrapperPostition: CSSProperties =
    type === 'prev' ? { left: 0 } : { right: 0 };

  const onClickWrapper = useCallback(() => {
    if (type === 'prev') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }, [type, swiper]);

  return (
    <NavigationButtonWrapper
      direction={type}
      onClick={onClickWrapper}
      style={{ ...style, ...wrapperPostition }}
    >
      {type === 'prev' && <ArrowBack color={defaultTheme.colors.grayText} />}
      {type === 'next' && <ArrowForward color={defaultTheme.colors.grayText} />}
    </NavigationButtonWrapper>
  );
};
