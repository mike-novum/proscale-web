import styled from 'styled-components';

interface FretsWrapperProps {
  size: number;
}
export const FretsWrapper = styled.div<FretsWrapperProps>`
  position: relative;
  background: #101010;
  transition: 200ms;
  width: ${(props) => props.size}px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 16px;
  overflow: hidden;
`;
