import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ControlButtonWrapperProps {
  active?: boolean;
  formType?: 'default' | 'circle';
}
const ControlButtonWrapper = styled.button<ControlButtonWrapperProps>`
  display: ${(props) => (props.formType === 'circle' ? 'flex' : undefined)};
  align-items: ${(props) =>
    props.formType === 'circle' ? 'center' : undefined};
  justify-content: ${(props) =>
    props.formType === 'circle' ? 'center' : undefined};

  font-weight: 600;
  color: ${(props) => props.theme.palette.text};
  border: none;
  width: ${(props) => (props.formType === 'circle' ? '44px' : 'auto')};
  height: 44px;
  border-radius: 22px;
  padding: 0px 16px;
  vertical-align: middle;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? props.theme.gradients.main : props.theme.palette.primary5};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.active
        ? props.theme.palette.primary
        : props.theme.palette.primary4};
  }
  &:active {
    opacity: 0.7;
  }

  @media (max-height: 1024px) {
    width: ${(props) => (props.formType === 'circle' ? '38px' : 'auto')};
    height: 38px;
    border-radius: 19px;
    font-size: 14px;
  }
  @media (max-height: 768px) {
    width: ${(props) => (props.formType === 'circle' ? '32px' : 'auto')};
    height: 32px;
    border-radius: 16px;
    font-size: 12px;
  }
`;

interface ControlButtonProps extends PropsWithChildren {
  active?: boolean;
  formType?: 'default' | 'circle';
  onClick?: () => void;
}

export const ControlButton: FC<ControlButtonProps> = ({
  children,
  active,
  formType,
  onClick,
}) => {
  return (
    <ControlButtonWrapper active={active} onClick={onClick} formType={formType}>
      <div>{children}</div>
    </ControlButtonWrapper>
  );
};
