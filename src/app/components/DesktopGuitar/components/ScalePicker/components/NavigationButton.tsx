import { useCallback, type CSSProperties, type FC } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const NavigationButtonWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.03);
  z-index: 111;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 200ms;
  opacity: 0;

  &:hover {
    opacity: 1;
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
      onClick={onClickWrapper}
      style={{ ...style, ...wrapperPostition }}
    >
      k
    </NavigationButtonWrapper>
  );
};
