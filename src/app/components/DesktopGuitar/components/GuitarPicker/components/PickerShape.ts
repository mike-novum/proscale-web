import styled from 'styled-components';

import { PADDING } from '../constants';

export const PickerShape = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.notification};
  top: ${PADDING}px;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  left: 0;

  @media (max-height: 1024px) {
    height: 36px;
    border-radius: 18px;
  }
`;
