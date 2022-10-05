// file: src/components/items/ItemsList.with-class-syntax.tsx

// example using class extending component
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'

export class ItemsListComponent extends React.Component<{
  items: ItemInterface[] // replace any[] with ItemInterface[]
}> {
  constructor(props: {
    items: ItemInterface[] // replace any[] with ItemInterface[]
  }) {
    super(props)
  }
  
  render(): React.ReactNode {
    const { items } = this.props

    return <div>
        <h3>Items:</h3>
        <ul>
          {
            items.map((item: any, index: number) => <li key={index}>{item.name}</li>)
          }
        </ul>
      </div>
  }
}
