import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
