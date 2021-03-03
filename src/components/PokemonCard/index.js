import {
  Container,
  Id,
  Name,
  Badges,
  Badge,
  BadgeImage,
  PokemonImage,
} from './styles'
import { convertToPokemonId } from '../../utils'
import { badges } from '../../assets/badges'

function PokemonCard({ pokedex, name, types, image }) {
  console.log("🚀 ~ file: index.js ~ line 14 ~ PokemonCard ~ types", types)
  return (
    <Container types={types} to={`/pokemons/${name}`}>
      <Id> {convertToPokemonId(pokedex)} </Id>
      <Name> {name} </Name>
      <Badges>
        {types.map(type => (
          <Badge key={`${name}-${type.name}`}>
            <BadgeImage
              src={badges[type.name]}
              alt={`Badge ${type.name}`}
            />
          </Badge>
        ))}
      </Badges>
      <PokemonImage>
        <img src={image} alt={`Imagem do ${name}`} width="180" height="180" />
      </PokemonImage>
    </Container>
  )
}

export { PokemonCard }
