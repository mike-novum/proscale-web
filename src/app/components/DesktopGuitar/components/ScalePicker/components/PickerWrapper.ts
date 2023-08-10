import styled from 'styled-components';

export const PickerWrapper = styled.div`
  position: relative;
  /* display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px; */
  max-width: 1024px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  border-radius: 20px;
  /* padding: 16px; */
  @media (max-height: 1024px) {
    /* padding: 12px; */
    border-radius: 16px;
  }
  @media (max-height: 768px) {
    /* padding: 8px; */
    border-radius: 12px;
  }
`;
