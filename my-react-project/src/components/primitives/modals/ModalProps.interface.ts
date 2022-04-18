// file: src/components/primitives/modals/ModalProps.interface.ts
import { FunctionComponent, ComponentClass } from 'react'

/**
 * @name ModalProps
 * @desrciption Interface that represents the public properties of the Modal component
 */
export interface ModalProps {
  testid?: string
  cancelLabel: string
  confirmLabel: string
  title?: string
  longDesc?: string // optional
  primaryButtonType?: string // optional, defaults to 'primary'
  icon?: string | FunctionComponent<{ addCss: string }> | ComponentClass<{ addCss: string }, any>
  iconAddCss?: string
}
