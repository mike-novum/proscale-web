import styled from 'styled-components';

import { PADDING } from './constants';

export const PickerWrapper = styled.div`
  position: relative;
  gap: 8px;
  height: 56px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.palette.black1};
  padding: 0px ${PADDING}px;
  width: fit-content;
  overflow: hidden;
`;
