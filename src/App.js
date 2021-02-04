import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Header } from './components'
import GlobalStyles from './styles/global'

import { Routes } from './routes'

function App() {
  const history = createBrowserHistory()

  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </>
  )
}

export default App
