import { FC, useEffect, useMemo, useRef } from 'react';
import { Scale } from 'tonal';

import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface ScalePickerProps {
  active: string;
  onChange: (scale: string) => void;
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

  const scaleNames = useMemo(() => Scale.names(), []);

  return (
    <PickerWrapper ref={scrollRef}>
      {scaleNames.map((scale) => {
        return (
          <ControlButton
            active={active === scale}
            ref={active === scale ? selectedItemRef : null}
            key={scale}
            onClick={() => {
              onChange(scale);
            }}
          >
            {scale}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
