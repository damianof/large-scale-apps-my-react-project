// file: src/components/primitives/toggles/ElToggle.tsx
type ElToggleProps = {
  testid?: string
  id: string
  checked?: boolean
  disabled?: boolean
  addCss?: string
  onClicked: Function
}

export function ElToggle(props: ElToggleProps) {
  const { id, onClicked } = props

  const testid = props.testid || 'testid-not-set'
  const disabled = props.disabled || false
  const checked = props.checked || false
  const addCss = (props.addCss || '').trim()

  // a computed property to return a different css class based on the selected value
  const cssClass = (): string => {
    const result = [
      'relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none'
    ]
    if (checked) {
      result.push('bg-green-400')
    } else {
      result.push('bg-gray-300')
    }
    if (disabled) {
      result.push('opacity-40 cursor-not-allowed')
    }
    if (addCss.length > 0) {
      result.push(addCss.trim())
    }
    return result.join(' ').trim()
  }

  const innerCssClass = (): string => {
    const result = [
      'bg-white shadow pointer-events-none inline-block h-6 w-6 rounded-full transform ring-0 transition duration-200'
    ]
    if (checked) {
      result.push('translate-x-6')
    } else {
      result.push('translate-x-0')
    }
    return result.join(' ').trim()
  }

  // click handler
  const handleClick = () => {
    // proceed only if the button is not disabled, otherwise ignore the click
    if (!disabled) {
      onClicked(id)
    }
  }

  return (
    <button
      type="button"
      role="checkbox"
      data-testid={testid}
      aria-checked={checked}
      disabled={disabled}
      className={cssClass()}
      onClick={() => handleClick()}
    >
      <span className={innerCssClass()}></span>
    </button>
  )
}
