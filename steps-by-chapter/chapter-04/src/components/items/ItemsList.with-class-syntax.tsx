// file: src/components/items/ItemsList.with-class-syntax.tsx

// example using class extending component
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'

type Props = {
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void
}

export class ItemsListComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  handleItemClick (item: ItemInterface) {
    this.props.onItemSelect(item)
  }
  
  render(): React.ReactNode {
    const { items } = this.props

    return (
      <div>
        <h3>Items (class syntax):</h3>
        <ul>
          {
            items.map((item: any, index: number) => <li key={index} onClick={() => this.handleItemClick(item)}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }
}
