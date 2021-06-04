import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './tokens.json'
import { GlobalStyles } from './globalStyles'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
