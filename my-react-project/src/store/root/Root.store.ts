// file: src/store/root/Root.store.ts

// import configureStore from redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// import our root store interface
import { RootStoreInterface } from './models'

// import our modules slices and actions/getters
import { itemsStoreSlice, useItemsActions, useItemsGetters } from '@/store/items/'

// configure root redux store for the whole app.
// this will be consumed by App.tsx
export const rootStore = configureStore({
  reducer: {
    // add reducers here
    itemsState: itemsStoreSlice.reducer
    // keep adding more domain-specific reducers here as needed
  }
})

// Infer the `RootStateInterface` type from the store itself (rootStore.getState)
// thus avoiding to explicitely having to create an additional interface for the
export type RootStateInterface = ReturnType<typeof rootStore.getState>

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore(): RootStoreInterface {
  // note: we are callin dispatch "commit" here, as it make more sense to call it this way
  // feel free to just call it dispatch if you prefer
  const commit = useDispatch()

  return {
    itemsStore: {
      actions: useItemsActions(commit),
      getters: useItemsGetters()
    }
    // additional domain store modules will be added here as needed
  }
}

// infer the type of the entire app state
type IAppState = ReturnType<typeof rootStore.getState>

/**
 * @name getAppState
 * @description
 * Returns a snapshot of the current app state (non-reactive)
 * This will be used mainly across store modules (i.e. items/etc)
 * In components we'll usually use getters, not this.
 * @returns
 */
export function getAppState(): IAppState {
  const appState = rootStore.getState()
  return {
    ...appState
  }
}
