import type { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import { defaultTheme } from 'theme';
import { Search } from 'ui/Icons';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 44px;
  min-height: 44px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 44px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;

  &::placeholder {
    color: #32354f;
  }
`;

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  outline-color: #ff9500;
  cursor: pointer;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
`;

// const ClearIcon = () => {
//   return <svg />;
// };

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange, style }) => {
  const onClickSearch = () => {};
  //   const onClickClear = () => {
  //     onChange('');
  //   };

  return (
    <InputWrapper style={style}>
      <ButtonWrapper onClick={onClickSearch}>
        <Search
          color={defaultTheme.colors.primary}
          style={{ margin: '4px 0px 0px 4px' }}
        />
      </ButtonWrapper>
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter scale name..."
      />
      {/* <ButtonWrapper onClick={onClickClear}>
        <ClearIcon />
      </ButtonWrapper> */}
    </InputWrapper>
  );
};
