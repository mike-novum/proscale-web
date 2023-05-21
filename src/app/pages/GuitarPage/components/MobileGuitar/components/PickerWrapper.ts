import styled, { keyframes } from 'styled-components';

const keyfr = keyframes`
	0% {
		transform: scale(0);
    transform: translateX(50px);
    opacity: 0;
	}

	100% {
    opacity: 1;
		transform: scale(1);
    transform: translateX(0);
	}
`;

export const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 8px 16px;
  overflow-x: scroll;
  gap: 8px;
  box-sizing: border-box;
  animation: ${keyfr} 0.6s ease 0s 1 normal forwards;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 375px) {
    gap: 4px;
  }
`;
