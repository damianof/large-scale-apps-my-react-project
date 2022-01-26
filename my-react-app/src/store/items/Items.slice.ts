// src/store/items/Items.slice.ts

// import createSlice and PayloadAction from redux toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import out items state interface, and the item interface
import { ItemsStateInterface } from './models'
import { ItemInterface } from '../../models/items/Item.interface'

// create an object that represents our initial items state
const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: []
}

// create the itemsStoreSlice with createSlice:
export const itemsStoreSlice = createSlice({
  name: 'itemsStoreSlice',
  initialState: initialItemsState,
  reducers: { // reducers are functions that commit final mutations to the state

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
    loadItems: (state) => {
      // mock some data:
      const mockItems = [{
        id: 1,
        name: 'Item 1',
        selected: true
      }, {
        id: 2,
        name: 'Item 2',
        selected: false
      }, {
        id: 3,
        name: 'Item 3',
        selected: false
      }]

      state.items = mockItems
      // set loading to false so the loader will be hidden in the UI
      state.loading = false
    },

    setItemSelected: (state, action: PayloadAction<ItemInterface>) => {
      const item = action.payload

      const found = state.items.find(o => o.id === item.id) as ItemInterface
      found.selected = !found.selected
      console.log('ItemsSlice: mutation: setItemSelected', found.id, found.selected)
    }
  }
})
