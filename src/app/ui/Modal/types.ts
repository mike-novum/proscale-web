import type { PropsWithChildren } from 'react';

export interface ModalWrapperProps {
  overlay?: boolean;
}

export interface ModalRef {
  open(): void;
  close(): void;
}

export interface ModalProps extends PropsWithChildren {
  overlay?: boolean;
  onClosed?: () => void;
}
