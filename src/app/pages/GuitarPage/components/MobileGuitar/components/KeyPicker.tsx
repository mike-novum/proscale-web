import { FC, useRef } from 'react';

import { NOTES, NoteKey } from '../../../../../utils/tunes';
import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface KeyPickerProps {
  active: NoteKey;
  onChange: (key: NoteKey) => void;
}

export const KeyPicker: FC<KeyPickerProps> = ({ onChange, active }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <PickerWrapper ref={scrollRef}>
      {NOTES.map((item) => {
        return (
          <ControlButton
            formType="circle"
            active={active === item}
            key={item}
            onClick={(e) => {
              scrollRef.current?.scrollTo({
                // TODO: fix types
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                left: e.target.offsetLeft - 40,
                behavior: 'smooth',
              });
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
