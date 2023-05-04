import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 600;
  background: linear-gradient(45deg, rgb(250 118 223), rgb(72 98 200));
  color: ${(props) => props.theme.palette.text};
  border: none;
  height: 44px;
  border-radius: 22px;
  padding: 0px 16px;
  vertical-align: middle;
  transition: 0.2s;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  width: 200px;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.97);
  }
`;
