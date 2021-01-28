import { Container, Link } from './styles'

function Menu() {
  const menuItems = [
    {
      name: 'Home',
      linkTo: '/',
    },
    {
      name: 'Pokemons',
      linkTo: '/pokemons',
    },
    {
      name: 'Gerações',
      linkTo: '/geracoes',
    },
    {
      name: 'Sobre',
      linkTo: '/sobre',
    },
  ]

  return (
    <Container>
      <ul>
        {menuItems.map(item => (
          <li key={item.linkTo}>
            <Link href={item.linkTo}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export { Menu }
