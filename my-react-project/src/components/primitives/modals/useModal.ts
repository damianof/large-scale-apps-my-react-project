// file: src/components/primitives/modals/useModal.ts
import * as React from 'react'
import ReactDOM from 'react-dom'
import { ElModal } from './ElModal'
import { ModalProps } from './ModalProps.interface'

let instance!: any //ElModal
const domTargetId = 'modal'

/**
 * @name useModal
 * @param props The modal props
 * @returns the Modal component instance
 */
export const useModal = (props: ModalProps) => {
  if (!instance) {
    // get the modal target dom element by id
    let domTarget = document.getElementById(domTargetId)
    // if not existing yet, create it with vanilla JS
    if (!domTarget) {
      domTarget = document.createElement('div')
      domTarget.setAttribute('id', domTargetId)
      document.body.appendChild(domTarget)
    }
    // create the ElModal instance
    const reactModal = React.createElement(ElModal, props, null)

    // render instance and store reference once
    instance = ReactDOM.render(reactModal, domTarget)
  }

  // update the Modal props
  instance.updateProps(props)

  // return the instance
  return instance
}
