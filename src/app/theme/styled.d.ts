import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: string;
      card: string;
      text: string;
      text2: string;
      text3: string;
      invertedText: string;
      primary: string;
      primary2: string;
      primary3: string;
    };
  }
}
