import styled from 'styled-components';

export const ControlPanelWrapper = styled.div<{ expanded: boolean }>`
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.card};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 8px;
  padding: 16px 0px;
  transition: 300ms;
  height: ${(props) => (props.expanded ? '184px' : '156px')};

  @media (max-width: 375px) {
    height: ${(props) => (props.expanded ? '156px' : '128px')};
  }
`;
