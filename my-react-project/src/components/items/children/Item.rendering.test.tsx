// file: src/components/items/children/Item.rendering.test.tsx
// directive to instruct vitest to use the jsdom environment:
// @vitest-environment jsdom
// import references to what we need from our test-utils:
import { render, screen } from '@/test-utils'

// import reference to our interface
import { ItemInterface } from '@/models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './Item.component'

describe('Item.component: rendering', () => {
  it('renders an Item text correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    // render component
    render(<ItemComponent testid="unit-test-item" model={model} onItemSelect={() => {}} />)
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`)

    // test
    expect(liElement).not.toBeNull()

    // get element children
    const children = liElement.children
    expect(children).toHaveLength(2)
    expect(children.item(1)?.innerHTML).toContain('Unit test item 1')
  })

  it('renders an Item indicator correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 2',
      selected: false
    }

    // render component
    render(<ItemComponent testid="unit-test-item" model={model} onItemSelect={() => {}} />)
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`)

    // test
    expect(liElement).not.toBeNull()

    // get element children
    const children = liElement.children
    expect(children).toHaveLength(2)
    expect(children.item(0)?.innerHTML).toEqual('*')
  })

  it('has expected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: true
    }

    // render component
    render(<ItemComponent testid="unit-test-item" model={model} onItemSelect={() => {}} />)
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`)

    // test
    expect(liElement).not.toBeNull()

    // check that the element class attribute has the expected value
    expect(liElement.className).toContain('selected')
  })

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: false
    }

    // render component
    render(<ItemComponent testid="unit-test-item" model={model} onItemSelect={() => {}} />)
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`)

    // test
    expect(liElement).not.toBeNull()

    // check that the element class attribute does not contain 'selected'
    expect(liElement.className).not.toContain('selected')
  })
})
