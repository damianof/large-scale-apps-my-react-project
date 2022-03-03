// file: Item.behavior.test.tsx
// @vitest-environment jsdom
import { render, screen, fireEvent } from '../../../test-utils'
import { vi } from 'vitest'

// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface'
// import reference to your Item component:
import { ItemComponent } from './Item.component'

describe('Item.component: behavior', () => {
  // test our component click event
  it('click event invokes onItemSelect handler as expected', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    // create a spy function with vi.fn()
    const onItemSelect = vi.fn()

    // render our component
    const { container } = render(<ItemComponent model={model} onItemSelect={onItemSelect} />)
    // get a reference to the <li> element
    const liElement = container.firstChild as HTMLElement
    // fire click
    fireEvent.click(liElement)
    // check test result
    expect(onItemSelect).toHaveBeenCalledTimes(1)
  })
})
