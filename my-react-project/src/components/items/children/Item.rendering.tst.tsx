// file: Item.rendering.test.tsx

import { render, screen, prettyDOM } from '@testing-library/react'

// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './Item.component'

test('renders an Item text correctly', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 1',
    selected: false
  }

  render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  // using react testing library "screen" to get the element by text
  const textElement = screen.getByText(/Unit test item 1/i)
  // test by expecting the element to exist in the component
  expect(textElement).toBeInTheDocument()
})

test('renders an Item indicator correctly', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 2',
    selected: false
  }

  render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  // using react testing library "screen" to get the element by text
  const indicatorElement = screen.getByText(/\*/i)
  // test by expecting the element to exist in the component
  expect(indicatorElement).toBeInTheDocument()
})

test('has expected css class when selected is true', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 3',
    selected: true
  }

  // this time invoke "render" by get a reference to the root container
  const {container} = render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  // the container firstChild is a reference to our <li> element
  const liElement = container.firstChild as HTMLElement
  // Note that you could use testing library prettyDOM function to console.log the lement
  // console.log(prettyDOM(liElement))
  // console.log(`container.className: "${ element?.className }""`)
  // check that the element class attribute has the expected value
  expect(liElement).toHaveClass('selected')
})

test('has expected css class when selected is false', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 3',
    selected: false
  }

  // this time invoke "render" by get a reference to the root container
  const {container} = render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  // the container firstChild is a reference to our <li> element
  const liElement = container.firstChild as HTMLElement
  // check that the element class attribute does not contain 'selected'
  expect(liElement).not.toHaveClass('selected')
})
