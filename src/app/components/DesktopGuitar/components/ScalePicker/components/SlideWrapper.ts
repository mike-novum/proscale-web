import styled from 'styled-components';

export const SlideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  @media (max-height: 1024px) {
    padding: 12px;
  }
  @media (max-height: 768px) {
    padding: 8px;
  }
`;
