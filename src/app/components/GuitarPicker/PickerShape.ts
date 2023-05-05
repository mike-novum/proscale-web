import styled from 'styled-components';

import { PADDING } from './constants';

export const PickerShape = styled.div`
  position: absolute;
  background-color: #1c1c1c;
  top: ${PADDING}px;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  left: 0;
`;
