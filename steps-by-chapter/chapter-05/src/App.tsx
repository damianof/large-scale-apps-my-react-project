// file: src/App.tsx
import './App.css' // <-- restore this import

import { useState } from 'react'
// import reference to our interface
import { ItemInterface } from './models/items/Item.interface'
// import reference to your ItemsList component:
import { ItemsListComponent } from './components/items/ItemsList.component'
import { ItemsListComponent as ItemsListClassComponent } from './components/items/ItemsList.with-class-syntax'

// component:
function App() {
  // add the useState declaration here passing our mock-data array as an argument
  const [items, setItems] = useState<ItemInterface[]>([{
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
  }])

  const onItemSelect = (item: ItemInterface) => {
    const updatedItems = [...items]
    const found = updatedItems.find(o => o.id === item.id) as ItemInterface
    found.selected = !item.selected
    setItems(updatedItems)
    // console.log('App.tsx: onItemSelect', found.id, found.selected, updatedItems)
  }

  return (
    <div>
      <ItemsListComponent items={items} onItemSelect={onItemSelect}/>
      <ItemsListClassComponent items={items} onItemSelect={onItemSelect}/>
    </div>
  );
}

export default App
