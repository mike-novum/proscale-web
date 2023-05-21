import type { FC } from 'react';
import styled from 'styled-components';

const ControlTabsWrapper = styled.div`
  width: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 4px;

  height: 56px;
  @media (max-width: 368px) {
    height: 32px;
  }
`;

const ControlTabButton = styled.button<{ active?: boolean }>`
  position: relative;
  border: none;
  outline: none;
  background: none;
  user-select: none;
  padding: 0px 8px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  transition: 0.2s ease;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  height: ${(props) => (props.active ? 32 : 28)}px;

  font-family: system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    opacity: 0.6;
  }
  width: ${(props) => (props.active ? 70 : 60)}px;

  height: 56px;
  @media (max-width: 368px) {
    height: 32px;
  }
`;

const ControlButtonText = styled.div<{ active: boolean }>`
  position: relative;

  user-select: none;

  color: ${(props) => props.theme.colors.text};

  font-family: system-ui, sans-serif;
  font-size: 16px;

  transition: 0.2s ease;
  transform: scale(${(props) => (props.active ? 1 : 0.85)});

  @media (max-width: 368px) {
    font-size: 14px;
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
