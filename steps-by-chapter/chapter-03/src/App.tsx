// file: src/App.tsx

// import reference to our interface
import { ItemInterface } from './models/items/Item.interface'
// import reference to your ItemsList component:
import { ItemsListComponent } from './components/items/ItemsList.component'

// mock data:
const items: ItemInterface[] = [{ // change any[] to ItemInterface[]
  id: 1,
  name: 'Item 1',
  selected: false // add selected: false to each item
}, {
  id: 2,
  name: 'Item 2',
  selected: false // add selected: false to each item
}, {
  id: 3,
  name: 'Item 3',
  selected: false // add selected: false to each item
}]

// component:
function App() {

  return (
    <div>
      <ItemsListComponent items={items}/>
    </div>
  );
}

export default App
