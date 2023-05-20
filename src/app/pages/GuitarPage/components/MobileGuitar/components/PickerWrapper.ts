import styled from 'styled-components';

export const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 8px 16px;
  overflow-x: scroll;
  gap: 4px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;
