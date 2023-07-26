import { memo, type FC } from 'react';

import {
  ControlButtonText,
  ControlTabButton,
  ControlTabsWrapper,
} from './components';

interface ControlTabsProps {
  activeTab?: number;
  onChange: (tab: number) => void;
}

const _ControlTabs: FC<ControlTabsProps> = ({ activeTab, onChange }) => {
  const labels = ['SCALES', 'TONICA', 'TUNING', 'GUITAR'];

  return (
    <ControlTabsWrapper>
      {labels.map((label, labelIndex) => {
        return (
          <ControlTabButton
            key={label}
            active={activeTab === labelIndex}
            onClick={() => {
              onChange(labelIndex);
            }}
          >
            <ControlButtonText active={activeTab === labelIndex}>
              {label}
            </ControlButtonText>
          </ControlTabButton>
        );
      })}
    </ControlTabsWrapper>
  );
};

export const ControlTabs = memo(_ControlTabs);
