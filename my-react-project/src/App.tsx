// file: App.tsx
import * as React from 'react'

// import our app.css
import './App.css'

// import a reference to Redux Proivder and our globalStore
import { Provider } from 'react-redux'
import { globalStore} from './store'

import { usei18n } from './localization/usei18n'

// import a reference to our ItemsView component
import ItemsView from './views/Items.view'

// App component:
function App() {
  const { t, changeLanguage } = usei18n()

  setTimeout(() => {
    changeLanguage('fr-FR')
  }, 2000)

  return (
    <Provider store={globalStore}>{/* wrap the root App element with Redux store provider */}
      <div className="App">
        <h2>{ t('home.welcome') }</h2>
        <ItemsView />
      </div>
    </Provider>
  )
}

export default App
