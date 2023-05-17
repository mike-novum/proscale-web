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
    props.isZeroFret
      ? props.theme.palette.black3
      : props.theme.palette.primary5};

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
`;
