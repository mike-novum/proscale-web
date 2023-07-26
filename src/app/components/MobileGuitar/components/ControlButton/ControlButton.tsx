import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';

import { ControlButtonWrapper } from './components';

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
