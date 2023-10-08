import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './page/Home'

import GlobalStyles from './style/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
)
