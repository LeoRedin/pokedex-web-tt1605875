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
    overflow-x: hidden;
    background-color: #ff9227;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    color: #fff;
  }

  input {
    color: #000;

    &:focus{
      color: rgba(255,255,255, 1);
    }

    &::placeholder{
      color: rgba(255,255,255, 0.3);
      opacity: 1;
    }

    &::-ms-input-placeholder{
      color: rgba(255,255,255, 0.3);
    }
  }

  a{
    &.menu-active{
      color: #db3400;
      border-bottom: 2px solid #fff;
    }
  }
`
