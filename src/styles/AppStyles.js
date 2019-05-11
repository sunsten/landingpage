import { createGlobalStyle } from 'styled-components'

import calibreLight from './fonts/Calibre-Light.otf'
import PilatBold from './fonts/Pilat-Bold.otf'
import CalibreMedium from './fonts/Calibre-Medium.otf'
import CalibreSemibold from './fonts/Calibre-Semibold.otf'

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 1.05vw;
}
 
body {
  font-size: 1rem;
}

/* @font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
} */

@font-face {
  font-family: calibreLight;
  font-style: normal;
  src: url(${calibreLight}) format("opentype");
}

@font-face {
  font-family: pilatBold;
  font-style: normal;
  src: url(${PilatBold}) format("opentype");
}

@font-face {
  font-family: calibreMedium;
  font-style: normal;
  src: url(${CalibreMedium}) format("opentype");
}

@font-face {
  font-family: calibreSemibold;
  font-style: normal;
  src: url(${CalibreSemibold}) format("opentype");
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul, hr, input[type=text], input[type=email], button {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
  font-family: "pilatBold";
  color: #1b1917;
}

h1, h2, h3, h4, h5, h6 {
  display: inline;
  font-size: inherit;
  font-weight: normal;
  /* letter-spacing: 0.1em; */
}

h1, h4 {
  font-family: "calibreSemibold";
}

h2 {
  font-family: "pilatBold";
}

h3 {
  font-family: "pilatBold";
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px black;
}

*, *:before, *:after {
  box-sizing: border-box;
}

ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: none;
  }
}

@media screen and (min-width: 1600px) {
  html {
    font-size: 16px;
  }
}

`
