import * as React from 'react'

import { api } from '../../services'

function Pokemons() {
  React.useEffect(() => {
    async function fetchPokemons() {
      const fetchData = await api.get('/pokemon')
      console.log(fetchData.data.results)
    }

    fetchPokemons()
  }, [])

  return <div>POKEMONS</div>
}

export { Pokemons }
