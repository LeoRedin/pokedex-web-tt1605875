import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  z-index: 1;
`

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;

  &:active {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    color: #f76737;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`
