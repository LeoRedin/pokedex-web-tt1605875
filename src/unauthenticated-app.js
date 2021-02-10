import styled from 'styled-components'
import { Button } from './components/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0.75rem;
`

function UnautheticatedApp() {
  const handleLogin = () => {
    console.log('crocante')
  }

  return (
    <Wrapper>
      <h1>Pokédex</h1>
      <ButtonsWrapper>
        <span onClick={handleLogin}>
          <Button variant="primary">Login</Button>
        </span>
        <Button variant="secondary">Cadastro</Button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export { UnautheticatedApp }
