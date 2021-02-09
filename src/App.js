import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useSelector } from 'react-redux'

import { Header, Layout, RoutesLayout } from './components'

import { Routes } from './routes'
import { UnautheticatedApp } from './unauthenticated-app'

function App() {
  const history = createBrowserHistory()
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const reduxState = useSelector(state => state)

  console.log(reduxState)

  return isAuthenticated ? (
    <Router history={history}>
      <Layout>
        <Header />
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  ) : (
    <UnautheticatedApp />
  )
}

export default App
