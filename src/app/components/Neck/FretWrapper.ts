import styled from 'styled-components';

interface FretWrapperProps {
  isZeroFret?: boolean;
  width?: number;
}

export const FretWrapper = styled.div<FretWrapperProps>`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${(props) =>
    props.isZeroFret
      ? props.theme.palette.black3
      : props.theme.palette.primary4};
  border-right: ${(props) => (props.isZeroFret ? '8px solid white' : 'none')};
  width: ${(props) => (props.width ? `${props.width}px` : '50px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
`;
