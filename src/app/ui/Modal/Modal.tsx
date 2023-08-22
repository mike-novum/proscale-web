import { useState, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import type { ModalProps, ModalRef } from './types';
import { ModalContent, ModalWrapper } from './components';

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ overlay, onClosed, children }, ref) => {
    const [mounted, setMounted] = useState(false);
    const [closing, setClosing] = useState(false);

    const open = () => {
      setMounted(true);
    };

    const close = () => {
      setClosing(true);
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          open,
          close,
        };
      },
      []
    );

    const onClickOverlay = () => {
      close();
    };

    const onTransitionEnd = () => {
      if (closing === true && mounted === true) {
        if (onClosed) {
          onClosed();
        }
        setMounted(false);
        setClosing(false);
      }
    };
    if (mounted === false) {
      return null;
    }

    return createPortal(
      <ModalWrapper
        overlay={overlay}
        className={closing === true ? ' closing' : undefined}
        onClick={onClickOverlay}
        onTransitionEnd={onTransitionEnd}
      >
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalWrapper>,
      document.body
    );
  }
);
