import type { FC } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const PaginationWrapper = styled.div`
  z-index: 111;
  height: 30px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const PaginationDotSize = 10;
const PaginationDotPadding = 4;

const PaginationDot = styled.button<{ active: boolean }>`
  height: ${PaginationDotSize}px;
  width: ${PaginationDotSize}px;
  border-radius: ${PaginationDotSize}px;

  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  margin: 0px ${PaginationDotPadding}px;

  transition: 200ms;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.notification};

  &:active {
    opacity: 0.7;
  }
`;

interface PaginationProps {
  childs: any[];
  activeIndex: number;
}

export const Pagination: FC<PaginationProps> = ({ childs, activeIndex }) => {
  const swiper = useSwiper();
  return (
    <PaginationWrapper>
      {childs.map((item, index) => {
        return (
          <PaginationDot
            active={activeIndex === index}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => {
              swiper.slideTo(index);
            }}
          />
        );
      })}
    </PaginationWrapper>
  );
};
