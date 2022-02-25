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

// import a reference to our apiClient instance
import { apiClient } from '../../api-client'

// hook to allows us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {
  // note: we are callin dispatch "commit" here, as it make more sense to call it this way
  // feel free to just call it dispatch if you prefer
  const commit = useDispatch()

  // get a reference to our slice actions (which are really our mutations/commits)
  const mutations = itemsStoreSlice.actions

  // our items store actions implementation:
  const actions: ItemsStoreActionsInterface = {
    loadItems: async () => {
      commit(mutations.setLoading(true))

      // invoke our API cient fetchItems to load the data from an API end-point
      const data = await apiClient.items.fetchItems()
      commit(mutations.setItems(data))
    },
    toggleItemSelected: async (item: ItemInterface) => {
      console.log('ItemsStore: action: toggleItemSelected', item)
      commit(mutations.setItemSelected(item))
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
