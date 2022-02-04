// file: ItemsList.component.tsx

import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './children/Item.component'
// import a reference to our Loader component:
import { Loader } from '../shared/Loader.component'

// ItemsList component
export class ItemsListComponent extends React.Component<{
  loading: boolean,
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void
}> {
  constructor(props: {
    loading: boolean,
    items: ItemInterface[],
    onItemSelect: (item: ItemInterface) => void
  }) {
    super(props)
  }

  handleItemClick (item: ItemInterface) {
    this.props.onItemSelect(item)
  }
  
  render(): React.ReactNode {
    const { loading, items } = this.props
    
    let element
    if (loading) {
      // render Loader
      element = <Loader />
    } else {
      // render <ul>
      element = <ul>
        {
          items.map((item, index) => {
            return <ItemComponent key={index} model={item} onItemSelect={() => this.handleItemClick(item)}></ItemComponent>
          })
        }
      </ul>
    }

    return <div>
        <h3>Items:</h3>
        {element}
      </div>
  }
}
