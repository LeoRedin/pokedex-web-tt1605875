import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Header, Layout, RoutesLayout } from './components'

import { Routes } from './routes'
import { UnautheticatedApp } from './unauthenticated-app'
import { useUserStore } from './store'

function App() {
  const history = createBrowserHistory()
  const { isAuthenticated } = useUserStore()

  return isAuthenticated ? (
    <>
      <Router history={history}>
        <Layout>
          <Header />
          <RoutesLayout>
            <Routes />
          </RoutesLayout>
        </Layout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  ) : (
    <UnautheticatedApp />
  )
}

export default App
