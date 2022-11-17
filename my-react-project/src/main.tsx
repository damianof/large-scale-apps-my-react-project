// file: src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// import tailwind main css file
import './tailwind/app.css'
import App from './App'
// import a reference to our i18n initialization code:
import './localization/i18n.init'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as Element)
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
)
