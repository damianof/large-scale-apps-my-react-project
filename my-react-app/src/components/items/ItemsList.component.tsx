// example using class extending component
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'

// example using class syntax
export class ItemsListComponent extends React.Component<{
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void
}> {
  constructor(props: {
    items: ItemInterface[],
    onItemSelect: (item: ItemInterface) => void
  }) {
    super(props)
  }

  handleItemClick (item: ItemInterface) {
    this.props.onItemSelect(item)
  }
  
  render(): React.ReactNode {
    const { items } = this.props   

    return <div>
        <h3>Items:</h3>
        <ul>
          {
            items.map((item, index) => {
              return <li key={index} onClick={() => this.handleItemClick(item)}>{item.name} [{String(item.selected)}]</li>
            })
          }
        </ul>
      </div>
  }
}