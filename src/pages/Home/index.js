import * as React from 'react'

import { Container, Title, InputContent, Input } from './styles'

function Home() {
  const [pokeName, setPokename] = React.useState('')

  const handleChange = evt => setPokename(evt.target.value)

  return (
    <Container>
      <Title>
        Procure <br />
        pokémons por <br />
        nome ou geração
      </Title>
      <InputContent>
        {/* ÍCONE */}
        <form>
          <Input
            placeholder="Deoxys"
            value={pokeName}
            onChange={handleChange}
          />
        </form>
      </InputContent>
    </Container>
  )
}

export { Home }
