import styled from 'styled-components';

import type { NoteTextProps } from '../types';

export const NoteText = styled.div<NoteTextProps>`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  font-family: system-ui, sans-serif;

  text-transform: capitalize;

  /* TODO: maybe delete? */
  @media (max-width: 1366px) {
    font-size: ${(props) => (props.device === 'mobile' ? '12px' : '10px')};
  }
`;
