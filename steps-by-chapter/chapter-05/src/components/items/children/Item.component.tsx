// file: Item.component.tsx

import React from 'react'
// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface'

// component props type:
type Props = {
  testid: string
  model: ItemInterface,
  onItemSelect: (item: ItemInterface) => void
}

// example using class syntax
export class ItemComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  get cssClass () {
    let css = 'item'
    if (this.props.model?.selected) {
      css += ' selected'
    }
    return css.trim()
  }

  handleItemClick (item: ItemInterface) {
    this.props.onItemSelect(item)
  }
  
  render(): React.ReactNode {
    const { model } = this.props 
    const testid = this.props.testid || 'not-set'  

    return (
      <li data-testid={testid} className={this.cssClass} onClick={() => this.handleItemClick(model)}>
        <div className="selected-indicator">*</div>
        <div className="name">{model.name}</div>
      </li>
    )
  }
}
