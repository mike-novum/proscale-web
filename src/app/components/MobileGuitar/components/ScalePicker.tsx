import { FC, useEffect, useRef } from 'react';

import { ScaleItem, Scales } from '../../../utils/tunes';
import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface ScalePickerProps {
  active: ScaleItem;
  onChange: (scale: ScaleItem) => void;
}

export const ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
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
      {Scales.map((scale) => {
        return (
          <ControlButton
            active={active.name === scale.name}
            ref={active.name === scale.name ? selectedItemRef : null}
            key={scale.name}
            onClick={() => {
              onChange(scale);
            }}
          >
            {scale.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
