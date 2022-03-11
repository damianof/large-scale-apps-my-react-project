// file: src/views/Items.view.tsx
import * as React from 'react'

// import hook useEffect from react
import { useEffect } from 'react'
// import a reference to our ItemInterface
import { ItemInterface } from '../models/items/Item.interface'
// import a reference to your ItemsList component:
import { ItemsListComponent } from '../components/items/ItemsList.component'
// import our useAppStore hook from our store
import { useAppStore } from '../store'

// ItemsView component:
function ItemsView() {
  // get a reference to our itemsStore instanceusing our useAppStore() hook:
  const { itemsStore } = useAppStore()

  // get a reference to the items state data through our itemsStore getters:
  const { loading, items } = itemsStore.getters

  // item select event handler
  const onItemSelect = (item: ItemInterface) => {
    itemsStore.actions.toggleItemSelected(item)
  }

  // use React useEffect to invoke our itemsStore loadItems action only once after this component is rendered:
  useEffect(() => {
    itemsStore.actions.loadItems()
  }, []) // <-- empty array means 'run once'

  // return our render function containing our ItemslistComponent as we did earlier in the App.tsx file
  return (
    <div>
      <ItemsListComponent loading={loading} items={items} onItemSelect={onItemSelect} />
    </div>
  )
}

export default ItemsView
