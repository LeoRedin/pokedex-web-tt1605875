import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  z-index: 1;
`

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: #f00;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;

  &::active {
    text-decoration: none;
    color: #ff0;
  }
`
