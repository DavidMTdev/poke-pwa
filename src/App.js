/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import Router from './router'

function App() {
  useEffect(() => {
    localStorage.setItem('language', 'en')
  }, [])

  return <Router />
}

export default App
