// file: src/components/counter/SampleComp.tsx
import * as React from 'react'

type Props = {
  testid?: string
  text?: string
}

export function SampleComp(props: Props) {
  const testid = props.testid || 'not-set'
  const text = props.text || 'not-set'

  // a computed property to return the css class 
  const cssClass = () => {
    return `p-2 border border-green-500`
  }

  return (
    <div data-testid={testid} className={cssClass()}>
      <span>{ text }</span>
    </div>
  )
}
