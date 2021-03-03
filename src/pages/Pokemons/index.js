import * as React from 'react'

import { api } from '../../services'
import { Spinner, PokemonCard } from '../../components'
import { Wrapper, Input, InputContent } from './styles'

function Pokemons() {
  const [pokemons, setPokemons] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [backupPokemons, setBackupPokemons] = React.useState()
  const [pokeName, setPokeName] = React.useState('')

  React.useEffect(() => {
    async function fetchPokemons() {
      const pokeData = await api.get('/pokemons/all')
      
      const pokemonList = pokeData.data.pokemons
      setPokemons(pokemonList)
      setBackupPokemons(pokemonList)
      setLoading(false)
    }

    fetchPokemons()
  }, [])

  React.useEffect(() => {
    /* LÓGICA CROCANTE */
    if (backupPokemons) {
      const oldPokemons = [...backupPokemons]
      const filteredPokemons = oldPokemons.filter(pokemon =>
        pokemon.name.includes(pokeName.toLowerCase()),
      )
      setPokemons(filteredPokemons)
    }
  }, [pokeName, backupPokemons])

  if (loading) return <Spinner />

  return (
    <Wrapper>
      <InputContent>
        <Input
          placeholder="Charmander"
          value={pokeName}
          onChange={evt => setPokeName(evt.target.value)}
        />
      </InputContent>
      {pokemons.map(pokemon => (
        <PokemonCard {...pokemon} key={pokemon.name} />
      ))}
    </Wrapper>
  )
}

export { Pokemons }
