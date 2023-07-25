import styled from 'styled-components';

interface FretWrapperProps {
  isZeroFret?: boolean;
  size?: number;
}

export const FretWrapper = styled.div<FretWrapperProps>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${(props) =>
    props.isZeroFret ? props.theme.colors.card : props.theme.colors.card};

  border-bottom: ${(props) => {
    return props.isZeroFret ? '8px solid white' : 'none';
  }};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  transition: 0.3s;

  height: ${(props) => {
    return props.size ? `${props.size}px` : '50px';
  }};
`;
