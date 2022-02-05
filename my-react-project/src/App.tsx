// file: App.tsx

import * as React from 'react'

// import our app.css
import './App.css'

// import a reference to Redux Proivder and our globalStore
import { Provider } from 'react-redux'
import { globalStore} from './store'

// import a reference to our ItemsView component
import ItemsView from './views/Items.view'

// App component:
function App() {
  return (
    <Provider store={globalStore}>{/* wrap the root App element with Redux store provider */}
      <div className="App">
        <ItemsView />
      </div>
    </Provider>
  )
}

export default App
