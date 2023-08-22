import styled from 'styled-components';

interface FretWrapperProps {
  isZeroFret?: boolean;
  size?: number;
}

export const FretWrapper = styled.div<FretWrapperProps>`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${(props) =>
    props.isZeroFret ? props.theme.colors.card : props.theme.colors.card};

  border-right: ${(props) => {
    return props.isZeroFret ? '8px solid white' : 'none';
  }};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
  transition: 0.3s;

  width: ${(props) => {
    return props.size ? `${props.size}px` : '50px';
  }};

  &:first-child {
    border-radius: 16px 0px 0px 16px;
  }
  &:nth-last-child(-n + 2) {
    border-radius: 0px 16px 16px 0px;
  }
`;
