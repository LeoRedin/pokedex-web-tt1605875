import { Switch, Route } from 'react-router-dom'

import { Home, Pokemons } from '../pages'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route exact path="/pokemons/:pokemon" component={Pokemons} />
    </Switch>
  )
}

export { Routes }
