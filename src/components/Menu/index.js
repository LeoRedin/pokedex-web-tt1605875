import { Container, Link, Content } from './styles'

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
      <Content>
        {menuItems.map(item => (
          <Link
            exact
            activeClassName="menu-active"
            key={item.linkTo}
            to={item.linkTo}
          >
            {item.name}
          </Link>
        ))}
      </Content>
    </Container>
  )
}

export { Menu }
