// file: src/App.tsx
import * as React from 'react'

// import our app.css
import './App.css'

// import a reference to Redux Provider and our rootStore
import { Provider } from 'react-redux'
import { rootStore } from '@/store'
// import a reference to useLocalization
import { useLocalization } from '@/localization'

// import a reference to our ItemsView component
import ItemsView from '@/views/Items.view'

import { LocaleSelector } from '@/components/shared/LocaleSelector.component'
import { DebugFormatters } from '@/components/shared/DebugFormatters.component'

// App component:
function App() {
  // get what we need from useLocalization:
  const { t, locales, currentLocale, changeLocale } = useLocalization()

  // an event handler from cahnging the locale
  const onLocaleClick = (lcid: string) => {
    changeLocale(lcid)
  }

  return (
    <Provider store={rootStore}>
      {/* wrap the root App element with Redux store provider */}
      <div className="App">
        <LocaleSelector locales={locales} currentLocale={currentLocale} onLocaleClick={onLocaleClick} t={t} />
        <h1>{t('home.welcome')}</h1> {/* update this to use the t function to translate our welcome message */}
        <ItemsView />
        <DebugFormatters show={false} />
      </div>
    </Provider>
  )
}

export default App
