import styled from 'styled-components';

interface ControlButtonProps {
  active?: boolean;
  formType?: 'default' | 'circle';
}
export const ControlButton = styled.button<ControlButtonProps>`
  font-weight: 600;

  color: ${(props) => props.theme.palette.text};
  border: none;
  height: 44px;
  width: ${(props) => (props.formType === 'circle' ? '44px' : 'auto')};
  border-radius: 22px;
  padding: 0px 16px;
  vertical-align: middle;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  background: ${(props) =>
    props.active ? props.theme.gradients.main : props.theme.palette.primary4};
  &:hover {
    background-color: ${(props) =>
      props.active
        ? props.theme.palette.primary
        : props.theme.palette.primary4};
  }
  &:active {
    opacity: 0.7;
  }
`;
