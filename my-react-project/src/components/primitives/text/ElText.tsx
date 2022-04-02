// file: src/components/primitives/text/ElText.tsx
import * as React from 'react'

type ElTextProps = {
  testid?: string
  id?: string
  tag: string
  text: string
  addCss?: string
}

interface ComponentProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: React.ElementType
  id?: string
  'data-testid': string
}

const Component: React.FC<ComponentProps> = ({ as: Tag = 'p', ...otherProps }) => {
  return <Tag {...otherProps} />
}

export function ElText(props: ElTextProps) {
  const { id, tag, text } = props

  const testid = props.testid || 'testid-not-set'
  const addCss = (props.addCss || '').trim()

  // a computed property the returns the css class value of this component root element
  const cssClass = (): string => {
    const cssClasses = ['p-1']
    if ((addCss || '').trim().length > 0) {
      cssClasses.push(addCss.trim())
    }
    return cssClasses.join(' ').trim()
  }

  return (
    <Component as={tag as any} id={id} data-testid={testid} className={cssClass()}>
      {text}
    </Component>
  )
}
