import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../theme'

export const Container = styled(Link)`
  width: 330px;
  heihgt: 115px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
  position: relative;
  margin: 20px;
  border-radius: 10px;
  text-decoration: none;
  background: ${({ types }) => colors.backgrounds[types[0].type.name]};
`
