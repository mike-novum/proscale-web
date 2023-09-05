import styled from 'styled-components';

const FRET_MARKER_SIZE = 18;
export const FretMarker = styled.div`
  position: absolute;
  top: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  left: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  width: ${FRET_MARKER_SIZE}px;
  height: ${FRET_MARKER_SIZE}px;
  border-radius: ${FRET_MARKER_SIZE / 2}px;
  background-color: ${(props) => props.theme.colors.background};
`;
