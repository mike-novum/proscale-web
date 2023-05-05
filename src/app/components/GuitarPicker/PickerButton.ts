import styled from 'styled-components';

interface PickerButtonProps {
  active?: boolean;
}
export const PickerButton = styled.button<PickerButtonProps>`
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  border: none;
  z-index: 1;
  font-size: 14px;
  transition: 0.2s;
  color: ${(props) => (props.active ? '#fff' : '#a5a5a5')};
  :active {
    opacity: 0.7;
  }
`;
