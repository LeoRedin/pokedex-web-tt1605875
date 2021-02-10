import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Header, Layout, RoutesLayout } from './components'

import { Routes } from './routes'
import { UnautheticatedApp } from './unauthenticated-app'

function App() {
  const history = createBrowserHistory()
  const isAuthenticated = false

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
