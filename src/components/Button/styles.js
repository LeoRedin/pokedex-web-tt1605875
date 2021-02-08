import styled from 'styled-components'
import { colors } from '../../theme'

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base,
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
}

export const Wrapper = styled.button`
  padding: 10px 15px;
  border: 0;
  line-height: 1;
  border-radius: 3px;
  cursor: pointer;
  ${({ variant }) => ({ ...buttonVariants[variant] })}
`
