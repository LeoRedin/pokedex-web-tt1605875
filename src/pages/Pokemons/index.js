import * as React from 'react'

import { api, getPokemons } from '../../services'
import { Spinner, PokemonCard } from '../../components'
import { Wrapper } from './styles'

/* PRECISAMOS DE:
  ID => número da dex
  NOME
  TIPO(S)
  IMAGEM
*/

function Pokemons() {
  const [pokemons, setPokemons] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchPokemons() {
      const pokeData = await getPokemons()

      if (pokeData.success) {
        const promises = []

        pokeData.data.results.forEach(pokemon =>
          promises.push(api.get(pokemon.url)),
        )

        Promise.allSettled(promises).then(results => {
          const updatedPokemons = []

          results.forEach(result => {
            if (result.status === 'fulfilled') {
              const uniquePokemon = {
                id: result.value.data.id,
                name: result.value.data.name,
                types: result.value.data.types,
                image:
                  result.value.data.sprites.other['official-artwork']
                    .front_default,
              }
              updatedPokemons.push(uniquePokemon)
            }
          })

          setPokemons(updatedPokemons)
          setLoading(false)
        })
      }
    }

    fetchPokemons()
  }, [])

  console.log('pokemons', pokemons)

  if (loading) return <Spinner />

  return (
    <Wrapper>
      <div>POKEMONS</div>
      {pokemons.map(pokemon => (
        <PokemonCard {...pokemon} />
      ))}
    </Wrapper>
  )
}

export { Pokemons }
