// file: src/store/root/Root.store.ts

// import configureStore from redux toolkit
import { configureStore } from '@reduxjs/toolkit'

// import our root store interface
import { RootStoreInterface } from './models'

// import our items slice and store
import { itemsStoreSlice, useItemsStore } from '../items/'

// configure global redux store for the whole app.
// this will be consumed by App.tsx
export const globalStore = configureStore({
  reducer: {
     //add reducers here
    items: itemsStoreSlice.reducer
  }
})

// Infer the `RootStateInterface` type from the store itself (globalStore.getState)
// thus avoiding to explicitely having to create an additional interface for the 
export type RootStateInterface = ReturnType<typeof globalStore.getState>
// Infer the dispatch type from globalStore.dispatch itself
//export type AppDispatch = typeof globalStore.dispatch

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore(): RootStoreInterface {
  return {
    itemsStore: useItemsStore(),
    // additional domain store modules will be eventually added here
  }
}
