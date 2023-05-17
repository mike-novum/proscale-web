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
  color: ${(props) => (props.active ? props.theme.colors.text : '#a5a5a5')};
  user-select: none;
  font-family: system-ui, sans-serif;
  :hover {
    color: ${(props) => (props.active ? 'inherit' : props.theme.colors.text)};
  }
  :active {
    opacity: 0.7;
  }

  @media (max-height: 1024px) {
    height: 48px;
    border-radius: 24px;
  }
`;
