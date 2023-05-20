import styled from 'styled-components';

export const DesktopWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-height: 1024px) {
    gap: 16px;
  }
  @media (max-height: 768px) {
    gap: 8px;
    justify-content: space-around;
  }
`;
