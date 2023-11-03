// file: src/main.tsx
import React from 'react'
// import ReactDOM from 'react-dom/client' // before React 18
import { createRoot } from 'react-dom/client' // from React 18
// import tailwind main css file
import './tailwind/app.css'
import App from './App'
// import a reference to our i18n initialization code:
import './localization/i18n.init'

const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container as Element) // before React 18
const root = createRoot(container as Element) // from React 18
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
)
