import { Wrapper } from './styles'

function Button({ text, children, variant }) {
  const renderText = children || text || ''
  return <Wrapper variant={variant}>{renderText}</Wrapper>
}

export { Button }
