// file: Item.behavior.test.tsx

// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, fireEvent, prettyDOM } from '@testing-library/react'

// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './Item.component'

// test our component click event
test('click event invokes onItemSelect handler as expected', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 1',
    selected: false
  }
  
  // create a spy function with jest.fn()
  const onItemSelect = jest.fn()

  // render our component
  const {container} = render(<ItemComponent model={model} onItemSelect={onItemSelect}/>)
  // get a reference to the <li> element
  const liElement = container.firstChild as HTMLElement
  // fire click
  fireEvent.click(liElement)
  // check test result
  expect(onItemSelect).toHaveBeenCalledTimes(1)
})
