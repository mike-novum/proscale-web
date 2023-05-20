import type { FC } from 'react';
import styled from 'styled-components';

const ControlTabsWrapper = styled.div`
  width: 100%;
  height: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 4px;
`;

const ControlTabButton = styled.button<{ active?: boolean }>`
  position: relative;
  border: none;
  outline: none;
  height: 32px;
  background: none;
  user-select: none;
  padding: 0px 8px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  transition: 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0.7)};

  :active {
    opacity: 0.6;
  }
`;

interface ControlTabsProps {
  activeTab?: number;
  onChange: (tab: number) => void;
}

export const ControlTabs: FC<ControlTabsProps> = ({ activeTab, onChange }) => {
  const labels = ['SCALES', 'TONICA', 'TUNING', 'GUITAR'];

  return (
    <ControlTabsWrapper>
      {labels.map((label, labelIndex) => {
        return (
          <ControlTabButton
            key="label"
            active={activeTab === labelIndex}
            onClick={() => {
              onChange(labelIndex);
            }}
          >
            {label}
          </ControlTabButton>
        );
      })}
    </ControlTabsWrapper>
  );
};
