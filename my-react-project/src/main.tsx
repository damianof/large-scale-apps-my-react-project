// file: src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom'
// import tailwind main css file
import './tailwind/app.css'
import App from './App'
// import a reference to our i18n initialization code:
import './localization/i18n.init'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
