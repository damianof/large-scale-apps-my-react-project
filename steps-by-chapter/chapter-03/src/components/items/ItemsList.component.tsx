// file: src/components/items/ItemsList.component.tsx

// example using const of type React.FC:
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'

export const ItemsListComponent: React.FC<{ 
    items: ItemInterface[] // replace any[] with ItemInterface[]
  }> = (props) => {

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {
          props.items.map((item, index) => <li key={index}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}
