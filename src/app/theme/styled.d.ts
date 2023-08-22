import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      white: string;
      black1: string;
      black2: string;
      black3: string;
      black4: string;
      background: string;
      background2: string;
      card: string;
      text: string;
      text2: string;
      text3: string;
      invertedText: string;
      primary: string;
      primary2: string;
      primary3: string;
      primary4: string;
      primary5: string;
    };
    gradients: {
      main: string;
    };
    borderRadius: {
      s: number;
      m: number;
      l: number;
    };
    colors: {
      zero: string;
      background: string;
      card: string;
      notification: string;
      text: string;
      invertedText: string;
      grayText: string;
      primary: string;
    };
  }
}
