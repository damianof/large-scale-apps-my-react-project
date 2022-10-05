// file: src/components/items/ItemsList.component.tsx

// example using const of type React.FC:
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './children/Item.component'

type Props = {
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void
}
// with function syntax
//  NOTE: React is perfectly happy with normal function signatures so you could simply use this if you prefer: "export const ItemsListComponent = (props: Props) => { ..."
export const ItemsListComponent: React.FC<Props> = (props) => {

  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelect(item)
  }

  return (
    <div>
      <h3>Items (function syntax):</h3>
      <ul>
        {
          props.items.map((item, index) => {
            // remove this return block:
            // return (
            //   <li key={index} 
            //     onClick={() => handleItemClick(item)}>
            //       {item.name} [{ String(item.selected) }] {/* output item.selected next to the name */}
            //   </li>
            // )
            // add this return block:
            return (
              <ItemComponent testid={`item-${ item.id }`} key={index} model={item} onItemSelect={() => handleItemClick(item)}></ItemComponent>
            )
          })
        }
      </ul>
    </div>
  )
}
