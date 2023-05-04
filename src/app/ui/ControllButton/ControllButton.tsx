import styled from 'styled-components';

interface ControlButtonProps {
  active?: boolean;
  formType?: 'default' | 'circle';
}
export const ControlButton = styled.button<ControlButtonProps>`
  font-weight: 600;
  background: ${(props) =>
    props.active ? props.theme.palette.primary : props.theme.palette.primary3};
  color: ${(props) => props.theme.palette.text};
  border: none;
  height: 44px;
  width: ${(props) => (props.formType === 'circle' ? '44px' : 'auto')};
  border-radius: 22px;
  padding: 0px 16px;
  vertical-align: middle;
  transition: 0.2s;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.palette.primary : '#382e44'};
  }
  &:active {
    opacity: 0.7;
  }
`;
