import { createGlobalStyle } from "styled-components";
import RobotoThin from './Roboto-Thin.woff2';
import RobotoLight from './Roboto-Light.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: Roboto-Thin;
        src: url(${RobotoThin}) format('woff2');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: Roboto-Light;
        src: url(${RobotoLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`