// src/store/items/Items.store.ts

// import hooks useSelector and useDispatch from react-redux
import { useSelector, useDispatch } from 'react-redux'

// import a refence to our itemsStoreSlice
import { itemsStoreSlice } from './Items.slice'
// import a reference to our RootStateInterface 
import { RootStateInterface } from '../root'
// import references to our itesms tore and actions interfaces
import { ItemsStoreInterface, ItemsStoreActionsInterface } from './models'
// import a reference to our ItemInterface
import { ItemInterface } from '../../models/items/Item.interface'

// hook to allows us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {
  const dispatch = useDispatch() // globalStore.dispatch //useDispatch()

  // get a reference to our slice actions (which are really our mutations/commits)
  const { loadItems, setLoading, setItemSelected } = itemsStoreSlice.actions 

  // our items store actions implementation:
  const actions: ItemsStoreActionsInterface = {
    loadItems: async () => {
      dispatch(setLoading(true))
  
      // let's pretend we called some API end-point
      // and it takes 1 second to return the data
      // by using javascript setTimeout with 1000 for the milliseconds option
      setTimeout(() => {
        dispatch(loadItems())
      }, 1000)
    },
    toggleItemSelected: async (item: ItemInterface) => {
      console.log('ItemsStore: action: toggleItemSelected', item)
      dispatch(setItemSelected(item))
    }
  }

  // return our store intance implementation
  return {
    getters: {
      loading: useSelector((s: RootStateInterface) => s.items.loading),
      items: useSelector((s: RootStateInterface) => s.items.items)
    },
    actions: actions
  }
}
