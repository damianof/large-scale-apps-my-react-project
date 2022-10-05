// file: src/components/items/ItemsList.with-class-syntax.tsx

// example using class extending component
import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './children/Item.component'

type Props = {
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void
}
// example using class syntax
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
            items.map((item: any, index: number) => {
              //return <li key={index} onClick={() => this.handleItemClick(item)}>{item.name}</li>
              return <ItemComponent testid={`item-${ item.id }`} key={index} model={item} onItemSelect={() => this.handleItemClick(item)}></ItemComponent>
            })
          }
        </ul>
      </div>
    )
  }
}
