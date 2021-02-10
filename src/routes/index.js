import { Switch, Route, Redirect } from 'react-router-dom'

import { Home, Pokemons, Pokemon } from '../pages'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route exact path="/pokemons/:pokemon" component={Pokemon} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export { Routes }
