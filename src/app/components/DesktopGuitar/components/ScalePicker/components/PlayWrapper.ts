import styled from 'styled-components';

export const PlayWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: relative;
  /* TODO: add color in scheme */
  background: #5d5e74;

  /* TODO: fix hovers with parent */
  &:hover {
    /* TODO: add color in scheme */
    background: #525367;
  }
`;
