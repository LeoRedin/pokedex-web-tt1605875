import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { api } from '../../services'
import { Spinner } from '../../components'

function Pokemon() {
  const { pokemon } = useParams()

  const { isLoading, isFetching, data } = useQuery(`${pokemon}`, () =>
    api.get(`/pokemon/${pokemon}`).then(res => res.data),
  )

  if (isLoading) return <Spinner />

  return (
    <>
      <div>Pokemon data: {isFetching && 'BUSCANDO NOVOS DADOS ...'} </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export { Pokemon }
