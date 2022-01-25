import React from 'react'
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
  const textElement = screen.getByText(/Unit test item 1/i)
  expect(textElement).toBeInTheDocument()
})

test('renders an Item indicator correctly', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 2',
    selected: false
  }

  render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  const indicatorElement = screen.getByText(/\*/i)
  expect(indicatorElement).toBeInTheDocument()
})

test('has expected css class when selected is true', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 3',
    selected: true
  }

  const {container} = render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  const element = container.firstChild as HTMLElement
  //console.log(`container.className ${ element?.className }`, prettyDOM(element) )
  expect(element?.className).toEqual('item selected')
})

test('has expected css class when selected is false', () => {
  const model: ItemInterface = {
    id: 1,
    name: 'Unit test item 3',
    selected: false
  }

  const {container} = render(<ItemComponent model={model} onItemSelect={() => {}}/>)
  const element = container.firstChild as HTMLElement
  expect(element?.className).toEqual('item')
})
