import styled from 'styled-components';

export const PickerWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  max-height: 300px;
  min-height: 224px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-height: 1024px) {
    border-radius: 16px;
  }

  @media (max-height: 768px) {
    border-radius: 12px;
  }
`;
