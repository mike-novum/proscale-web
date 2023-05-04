import { FC, useState } from 'react';
import styled from 'styled-components';

import { AllGuitars } from '../../utils/tunes';

interface GuitarPickerProps {
  active?: string;
  onChange?: () => void;
}

const TAB_SIZE = 100;

const PADDING = 6;

const PickerWrapper = styled.div`
  /* background-color: #ff9500; */
  position: relative;
  gap: 8px;
  height: 56px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  background: #0c0c0c;
  padding: 0px ${PADDING}px;
  width: fit-content;
  overflow: hidden;
`;

interface PickerButtonProps {
  active?: boolean;
}
const PickerButton = styled.button<PickerButtonProps>`
  background: transparent;
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  border: none;
  z-index: 1;
  font-size: 14px;
  transition: 0.2s;
  color: ${(props) => (props.active ? '#fff' : '#a5a5a5')};
  :active {
    opacity: 0.7;
  }
`;

const PickerShape = styled.div`
  position: absolute;
  background-color: #1c1c1c;
  top: ${PADDING}px;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  left: 0;
`;

export const GuitarPicker: FC<GuitarPickerProps> = () => {
  const labels = AllGuitars.map((guitar) => guitar.name);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <PickerWrapper>
      <PickerShape
        style={{
          left: activeIndex * TAB_SIZE + 8 * activeIndex + PADDING,
        }}
      />
      {labels.map((label, index) => {
        return (
          <PickerButton
            key={label}
            active={index === activeIndex}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {label}
          </PickerButton>
        );
      })}
    </PickerWrapper>
  );
};
