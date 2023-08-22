import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  TransitionEventHandler,
} from 'react';
import { createPortal } from 'react-dom';

import type { ModalProps, ModalRef } from './types';
import { ModalContent, ModalWrapper } from './components';

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ overlay, onClosed, children }, ref) => {
    const [mounted, setMounted] = useState(false);
    const [closing, setClosing] = useState(false);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const open = () => {
      setMounted(true);
    };

    const close = () => {
      console.log('closing...');
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

    const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = (e) => {
      if (e.target !== wrapperRef.current) {
        return;
      }

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
        ref={wrapperRef}
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
