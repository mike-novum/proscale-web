import { FC, useEffect, useRef, useState } from 'react';

import { AllGuitars, Guitar } from '../../../../../utils/tunes';
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

  return (
    <PickerWrapper ref={scrollRef}>
      {AllGuitars.map((guitar) => {
        return (
          <ControlButton
            size={big ? 'big' : 'default'}
            key={guitar.key}
            active={guitar.key === active.key}
            onClick={(e) => {
              scrollRef.current?.scrollTo({
                // TODO: fix types
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                left: e.target.offsetLeft - 40,
                behavior: 'smooth',
              });
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
