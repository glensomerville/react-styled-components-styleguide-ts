import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface ThemeFontsInterface {
    primary: string;
    secondary: string;
}

interface ThemeColoursInterface {
    darkishBlue: string;
    yellowOrange: string;
    paleRed: string;
    paleRed5: string;
    powderBlue: string;
    cerulean: string;
    palePurple: string;
    seafoamBlue: string;
    seafoamBlue15: string;
    kelleyGreen: string;
    black: string;
    warmGrey: string;
    greenBlue: string;
    white: string;
    whiteTwo: string;
    brownishGrey: string;
    ceruleanHover: string;
    yellowOrangeHover: string;
    whiteThree: string;
    pinkishGrey: string;
}

interface ThemeInterface {
  fonts: ThemeFontsInterface;
  colors: ThemeColoursInterface;
}

export const theme = {
    fonts: {
        primary: 'proxima-nova',
        secondary: 'omnes-pro',
    },
    colors: {
        darkishBlue: '#003479',
        yellowOrange: '#f6a800',
        paleRed: '#dc4040',
        paleRed5: '#FDF3F3',
        powderBlue: '#b0dcfa',
        cerulean: '#009ddb',
        palePurple: '#a98acf',
        seafoamBlue: '#63ccca',
        seafoamBlue15: 'rgba(99, 204, 202, 0.15)',
        kelleyGreen: '#00833f',
        black: '#333333',
        warmGrey: '#888888',
        greenBlue: '#06a8a2',
        white: '#e6e6e6',
        whiteTwo: '#ffffff',
        brownishGrey: '#666666',
        ceruleanHover: '#0087c7',
        yellowOrangeHover: '#ed8813',
        whiteThree: '#dddddd',
        pinkishGrey: '#cccccc',
    },
};

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
  