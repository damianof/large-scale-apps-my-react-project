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
  reducers: { 
    // reducers are functions that commit final mutations to the state
    // These will commit final mutation/changes to the state

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
    setItems: (state, action: PayloadAction<ItemInterface[]>) => { 
      // update our state:
      // set our items
      state.items = action.payload || []
      // set loading to false so the loader will be hidden in the UI
      state.loading = false
    },

    setItemSelected: (state, action: PayloadAction<ItemInterface>) => {
      const item = action.payload
      const found = state.items.find(o => o.id === item.id) as ItemInterface
      found.selected = !found.selected
    }
  }
})
