import styled from 'styled-components';

interface FretsWrapperProps {
  height: number;
}
export const FretsWrapper = styled.div<FretsWrapperProps>`
  position: relative;
  background: #101010;
  transition: 200ms;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  border-radius: 16px;
  overflow: hidden;
`;
