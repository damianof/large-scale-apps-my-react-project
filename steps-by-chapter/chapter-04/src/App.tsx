// file: src/App.tsx
import { useState } from 'react'
// import reference to our interface
import { ItemInterface } from './models/items/Item.interface'
// import reference to your ItemsList component:
import { ItemsListComponent } from './components/items/ItemsList.component'


// begin: remove code block:
// const items: ItemInterface[] = [{
//   id: 1,
//   name: 'Item 1',
//   selected: false
// }, {
//   id: 2,
//   name: 'Item 2',
//   selected: false
// }, {
//   id: 3,
//   name: 'Item 3',
//   selected: false
// }]
// end: remove code block:

// component:
function App() {
  // begin: add code block
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
  // end: add code block

  // begin: add code block
  const onItemSelect = (item: ItemInterface) => {
    const updatedItems = [...items]
    const found = updatedItems.find(o => o.id === item.id) as ItemInterface
    found.selected = !item.selected
    setItems(updatedItems)
    console.log('App.tsx: onItemSelect', found.id, found.selected, updatedItems)
  }
  // end: add code block

  return (
    <div>
      <ItemsListComponent items={items} onItemSelect={onItemSelect}/>
    </div>
  );
}

export default App
