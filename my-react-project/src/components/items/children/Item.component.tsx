// file: src/components/items/children/Item.component.tsx

import * as React from 'react'
// import reference to our interface
import { ItemInterface } from '@/models/items/Item.interface'
// add the following two lines:
import { ElText } from '@/components/primitives/text/ElText'
import { ElToggle } from '@/components/primitives/toggles/ElToggle'

// example using class syntax
export class ItemComponent extends React.Component<{
  testid?: string
  model: ItemInterface
  isLast?: boolean
  onItemSelect: (item: ItemInterface) => void
}> {
  constructor(props: { testid?: string; model: ItemInterface; onItemSelect: (item: ItemInterface) => void }) {
    super(props)
  }

  get cssClass() {
    let css = 'tem flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3'
    if (this.props.model?.selected) {
      css += ' font-bold bg-pink-200 hover:bg-pink-100 selected'
    } else {
      css += ' text-gray-500 hover:bg-gray-100'
    }
    if (!this.props.isLast) {
      css += ' border-b-0'
    }
    return css.trim()
  }

  handleItemClick(item: ItemInterface) {
    this.props.onItemSelect(item)
  }

  // <div className="name">{model.name} [{String(model.selected)}]</div>

  render(): React.ReactNode {
    const { model, testid } = this.props

    return (
      <li data-testid={testid || 'not-set'} className={this.cssClass} onClick={() => this.handleItemClick(model)}>
        <ElText testid={`${testid}-text`} tag="div" text={model.name} />
        <ElToggle testid={`${testid}-toggle`} checked={model.selected} />
      </li>
    )
  }
}
