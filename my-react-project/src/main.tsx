import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './localization/i18n.init'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
