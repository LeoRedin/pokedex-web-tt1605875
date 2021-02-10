import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/global'
import './styles/normalize.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
