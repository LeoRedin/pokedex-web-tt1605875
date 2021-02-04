import * as React from 'react'

import { Container, Title, InputContent, Input } from './styles'

function Home({ history }) {
  const [pokeName, setPokename] = React.useState('')

  const handleChange = evt => setPokename(evt.target.value)

  const handleSubmit = evt => {
    evt.preventDefault()

    const path = `/pokemons/${pokeName}`
    history.push(path)
  }

  return (
    <Container>
      <Title>
        Procure <br />
        pokémons por <br />
        nome ou geração
      </Title>
      <InputContent>
        {/* ÍCONE */}
        <form onSubmit={handleSubmit}>
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
