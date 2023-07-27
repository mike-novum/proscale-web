import { FC, useEffect, useRef } from 'react';
// TODO: fix this dependence
import { NOTES } from 'components/DesktopGuitar/components/KeyPicker/constants';

import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface KeyPickerProps {
  active: string;
  onChange: (key: string) => void;
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
