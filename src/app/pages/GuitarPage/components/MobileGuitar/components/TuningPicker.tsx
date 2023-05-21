import { FC, useRef } from 'react';

import { PickerWrapper } from './PickerWrapper';
import type { TuningItem } from '../../../../../utils/tunes';
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
  return (
    <PickerWrapper ref={scrollRef}>
      {tunings.map((item) => {
        return (
          <ControlButton
            active={active.name === item.name}
            key={item.name}
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
            {item.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
