// example using class extending component
import React from 'react'

export class ItemsListComponent extends React.Component<{
  items: any[]
}> {
  constructor(props: {
    items: any[]
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
