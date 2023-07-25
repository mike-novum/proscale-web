import { FC, useEffect, useRef, useState } from 'react';

import { AllGuitars, Guitar } from '../../../utils/tunes';
import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface GuitarPickerProps {
  active: Guitar;
  onChange: (guitar: Guitar) => void;
}

export const GuitarPicker: FC<GuitarPickerProps> = ({ onChange, active }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [big, setBig] = useState<boolean>(false);

  useEffect(() => {
    setBig(true);
  }, []);

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
      {AllGuitars.map((guitar) => {
        return (
          <ControlButton
            size={big ? 'big' : 'default'}
            key={guitar.key}
            ref={guitar.key === active.key ? selectedItemRef : null}
            active={guitar.key === active.key}
            onClick={() => {
              onChange(guitar);
            }}
          >
            {guitar.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
