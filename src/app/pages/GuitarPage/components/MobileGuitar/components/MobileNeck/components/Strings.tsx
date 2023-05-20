import type { FC } from 'react';
import styled from 'styled-components';

interface StringsProps {
  count: number;
}

const StringsWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 16px;
`;

const String = styled.div`
  width: 2px;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export const Strings: FC<StringsProps> = ({ count }) => {
  return (
    <StringsWrapper>
      {Array.from({ length: count }, (v, k) => k).map((_, index) => {
        return (
          <String
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        );
      })}
    </StringsWrapper>
  );
};
