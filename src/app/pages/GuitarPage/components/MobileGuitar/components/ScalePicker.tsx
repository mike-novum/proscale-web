import { FC, useRef } from 'react';

import { ScaleItem, Scales } from '../../../../../utils/tunes';
import { PickerWrapper } from './PickerWrapper';
import { ControlButton } from './ControlButton';

interface ScalePickerProps {
  active: ScaleItem;
  onChange: (scale: ScaleItem) => void;
}

export const ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <PickerWrapper ref={scrollRef}>
      {Scales.map((scale) => {
        return (
          <ControlButton
            active={active.name === scale.name}
            key={scale.name}
            onClick={(e) => {
              scrollRef.current?.scrollTo({
                // TODO: fix types
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                left: e.target.offsetLeft - 40,
                behavior: 'smooth',
              });
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
