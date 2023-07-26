import { FC, useEffect, useRef } from 'react';
import type { TuningItem } from 'utils/tunes';

import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface TuningPickerProps {
  active: TuningItem;
  onChange: (tuningItem: TuningItem) => void;
  tunings: TuningItem[];
}

export const TuningPicker: FC<TuningPickerProps> = ({
  onChange,
  active,
  tunings,
}) => {
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
      {tunings.map((item) => {
        return (
          <ControlButton
            active={active.name === item.name}
            ref={active.name === item.name ? selectedItemRef : null}
            key={item.name}
            onClick={() => {
              onChange(item);
            }}
          >
            {item.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
