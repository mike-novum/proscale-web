import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import styled from 'styled-components';

interface ControlButtonWrapperProps {
  active?: boolean;
  formType?: 'default' | 'circle';
  size?: 'big' | 'default';
}

const ControlButtonWrapper = styled.button<ControlButtonWrapperProps>`
  display: ${(props) => (props.formType === 'circle' ? 'flex' : undefined)};
  align-items: ${(props) =>
    props.formType === 'circle' ? 'center' : undefined};
  justify-content: ${(props) =>
    props.formType === 'circle' ? 'center' : undefined};

  color: ${(props) => props.theme.palette.text};
  border: none;

  border-radius: 22px;
  padding: ${(props) => (props.formType === 'circle' ? 'unset' : ' 0px 16px')};
  vertical-align: middle;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  font-family: system-ui, sans-serif;
  background: ${(props) =>
    props.active
      ? props.theme.gradients.main
      : props.theme.colors.notification};

  font-weight: 600;
  min-width: ${(props) => (props.formType === 'circle' ? '44px' : 'auto')};
  transition: 0.3s;
  height: ${(props) => (props.size === 'big' ? '72px' : '44px')};

  &:hover {
    background-color: ${(props) => `${props.theme.colors.notification}aa`};
  }
  &:active {
    opacity: 0.7;
  }

  @media (max-width: 375px) {
    animation: none;

    height: ${(props) => (props.size === 'big' ? '64px' : '36px')};
    border-radius: 18px;
    min-width: ${(props) => (props.formType === 'circle' ? '36px' : 'auto')};
  }
`;

interface ControlButtonProps extends PropsWithChildren {
  active?: boolean;
  formType?: 'default' | 'circle';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'big' | 'default';
}

// eslint-disable-next-line react/display-name
export const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps>(
  ({ children, active, formType, onClick, size = 'default' }, ref) => {
    return (
      <ControlButtonWrapper
        ref={ref}
        size={size}
        active={active}
        onClick={onClick}
        formType={formType}
      >
        <div
          style={{
            userSelect: 'none',
            fontFamily: 'system-ui, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          {children}
        </div>
      </ControlButtonWrapper>
    );
  }
);
