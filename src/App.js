/* eslint-disable no-unused-vars */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Router from './router'
import { LightTheme } from './themes'
import { GlobalStyle } from './styles'

function App() {
  return (
    // <ThemeProvider theme={LightTheme}>
    // <GlobalStyle />
    <Router />
    // </ThemeProvider>
  )
}

export default App
