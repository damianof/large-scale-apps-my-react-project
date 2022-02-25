// file: src/App.tsx
import * as React from 'react'

// import our app.css
import './App.css'

// import a reference to Redux Proivder and our globalStore
import { Provider } from 'react-redux'
import { globalStore } from './store'
// import a reference to useLocalization
import { useLocalization } from './localization/useLocalization'

// import a reference to our ItemsView component
import ItemsView from './views/Items.view'

// App component:
function App() {
  // get what we need from useLocalization:
  const { t, locales, currentLocale, getUserPreferredLocale, changeLocale } = useLocalization()

  // an event handler from cahnging the locale
  const onLocaleClick = (lcid: string) => {
    changeLocale(lcid)
  }

  return (
    <Provider store={globalStore}>
      {/* wrap the root App element with Redux store provider */}
      <div className="App">
        <div>
          {
            /* loop through the locales and create a radio button for each locale */
            locales.map((item) => {
              const radioId = `radio-locale-${item.key}`
              return (
                <label
                  key={item.key}
                  htmlFor={radioId}
                  className="cursor-pointer"
                  onClick={() => onLocaleClick(item.key)}
                >
                  <input
                    type="radio"
                    id={radioId}
                    radioGroup={currentLocale}
                    name="locale"
                    value={item.key}
                    checked={currentLocale === item.key}
                    onChange={() => {}}
                  />
                  {
                    /* use the t function to translate the label of this radio */
                    t(`locale.selector.${item.key}`)
                  }
                </label>
              )
            })
          }
        </div>
        <h1>{t('home.welcome')}</h1> {/* update this to use the t function to translate our welcome message */}
        <ItemsView />
      </div>
    </Provider>
  )
}

export default App
