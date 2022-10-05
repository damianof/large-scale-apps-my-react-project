// example using const of type React.FC:
import React from 'react'

export const ItemsListComponent: React.FC<{ 
    items: any[] 
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
