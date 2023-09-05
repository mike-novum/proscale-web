import type {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react';
import type { DefaultTheme, StyledComponent } from 'styled-components';

export interface ModalWrapperProps {
  overlay?: boolean;
}

export interface ModalRef {
  open(): void;
  close(): void;
}

export type UIComponents = {
  Header: StyledComponent<'div', DefaultTheme, object, never>;
  WrapContainer: StyledComponent<'div', DefaultTheme, object, never>;
  Container: StyledComponent<'div', DefaultTheme, object, never>;
};

export type ModalProps = PropsWithChildren & {
  overlay?: boolean;
  onClosed?: () => void;
};

export type ModalComponent = ForwardRefExoticComponent<
  ModalProps & RefAttributes<ModalRef>
> &
  UIComponents;
