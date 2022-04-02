// file: src/components/primitives/buttons/ElButton.tsx
import { buttonCssStrategy } from './ButtonCssStrategy'

type ElButtonProps = {
  testid?: string
  id: string
  label: string
  disabled?: boolean
  addCss?: string
  buttonType?: string
  onClicked: Function
}

export function ElButton(props: ElButtonProps) {
  const { id, label, onClicked } = props

  const testid = props.testid || 'testid-not-set'
  const disabled = props.disabled || false
  const buttonType = props.buttonType || 'primary'
  const addCss = (props.addCss || '').trim()

  // a computed property to return a different css class based on the selected value
  const cssClass = (): string => {
    const result = [
      'font-bold py-1 px-2 inline-flex justify-center rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
    ]
    if (disabled) {
      // these are the button CSS classes when disabled
      result.push('bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed')
    } else {
      // these are the button CSS classes when enabled
      result.push(buttonCssStrategy.get(buttonType) as string)
    }

    // addCss will have additional CSS classes
    // we want to apply from where we consume this component
    if (addCss.length > 0) {
      result.push(addCss)
    }
    return result.join(' ').trim()
  }

  // click handler
  const handleClick = () => {
    // proceed only if the button is not disabled, otherwise ignore the click
    if (!disabled) {
      // dispatch a 'clicked' even through Svelte dispatch
      onClicked(id)
    }
  }

  return (
    <button
      type="button"
      aria-label={label}
      data-testid={testid}
      disabled={disabled}
      className={cssClass()}
      onClick={() => handleClick()}
    >
      <span className="name">{label}</span>
    </button>
  )
}
