// file: App.tsx
import * as React from 'react'

// import our app.css
import './App.css'

// import a reference to Redux Proivder and our globalStore
import { Provider } from 'react-redux'
import { globalStore} from './store'

import { useLocalization } from './localization/useLocalization'

// import a reference to our ItemsView component
import ItemsView from './views/Items.view'

// App component:
function App() {
  const { 
    t, 
    locales,
    currentLocale,
    getUserPreferredLocale, 
    changeLocale, 
  } = useLocalization()
  
  const onLocaleClick = (lcid: string) => {
    changeLocale(lcid)
  }

  return (
    <Provider store={globalStore}>{/* wrap the root App element with Redux store provider */}
      <div className="App">
        <div>
          {
            locales.map((item, index) => {
              return (
                <label className="cursor-pointer">
                  <input type="radio" radioGroup={currentLocale} name="locale" value={item.key} checked={ currentLocale === item.key } onClick={() => onLocaleClick(item.key)} />
                  { t(`locale.selector.${ item.key }`) }
                </label>
              )
            })
          }
        </div>
        <h1>{ t('home.welcome') } [Locale: {currentLocale}]</h1>
        <ItemsView />
      </div>
    </Provider>
  )
}

export default App
