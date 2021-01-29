import { createGlobalStyle } from 'styled-components'

import SFRegular from '../assets/fonts/sf-pro-display-regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Sf';
    src: local('Sf'), local('FontName'),
    url(${SFRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: 'Sf';
    background-color: #ff9227;
  }
`
