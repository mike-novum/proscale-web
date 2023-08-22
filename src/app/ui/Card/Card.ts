import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: ${(props) => props.theme.borderRadius.m}px;
`;
