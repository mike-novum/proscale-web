import { FC, useEffect, useRef } from 'react';
import { NOTES, NoteKey } from 'utils/tunes';

import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface KeyPickerProps {
  active: NoteKey;
  onChange: (key: NoteKey) => void;
}

export const KeyPicker: FC<KeyPickerProps> = ({ onChange, active }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (selectedItemRef.current) {
      scrollRef.current?.scrollTo({
        left: selectedItemRef.current.offsetLeft - 40,
        behavior: 'smooth',
      });
    }
  }, [active]);

  return (
    <PickerWrapper ref={scrollRef}>
      {NOTES.map((item) => {
        return (
          <ControlButton
            formType="circle"
            active={active === item}
            key={item}
            ref={active === item ? selectedItemRef : null}
            onClick={() => {
              onChange(item);
            }}
          >
            {item}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
