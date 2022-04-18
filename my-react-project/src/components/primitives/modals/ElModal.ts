// file: src/components/primitives/modals/ElModal.ts

import * as React from 'react'
import { ModalProps } from './ModalProps.interface'
import { ElButton } from '../buttons/ElButton'

const getDefaultState = () => {
  return {
    testid: 'testid-not-set',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm?',
    title: 'Do you confirm this action?',
    longDesc: undefined, // make sure you return undefined for optional props
    primaryButtonType: 'primary',
    icon: undefined,
    iconAddCss: undefined,
    isOpen: false
  }
}

interface ModalState extends ModalProps {
  isOpen: boolean
}

export class ElModal extends React.Component<ModalProps, ModalState> {
  // a variable that will store a reference to a "resolve" from a Promise we created in the prompt() method
  private privateResolve!: (value: boolean | PromiseLike<boolean>) => void

  constructor(props: ModalProps) {
    super(props)

    // Set the internal state
    this.state = {
      ...getDefaultState(),
      ...props
    }
  }

  // public updateProps() method used to set the private props from our useModal hook
  public updateProps = (updatedProps: ModalProps) => {
    this.state = {
      ...getDefaultState(),
      ...updatedProps
    }
  }

  private open = () => {
    this.setState({ isOpen: true })
  }

  private close = () => {
    this.setState({ isOpen: false })
  }

  // handle click from Cancel button
  private onCancelClick = () => {
    this.close()
    this.privateResolve(false)
  }

  // handle click from Confirm button
  private onConfirmClick = () => {
    this.close()
    this.privateResolve(true)
  }

  private cssClass = () => {
    const result = ['fixed z-10 inset-0 overflow-y-auto transform transition-all']
    // might add additional css based on conditions...
    return result.join(' ').trim()
  }

  // public prompt() method:
  public prompt = async (title: string) => {
    // update internal props
    this.setState({ ...this.state, title: title })
    // open the modal
    this.open()
    // return a new promise that will be waited by the consuming code
    return new Promise<boolean>((resolve) => {
      // here we store a reference to the resolve returned with the Promise to the consuming code
      this.privateResolve = resolve
    })
  }

  // renders the Icon section
  private renderIconSection = () => {
    if (!this.state.icon) {
      return null
    }

    return React.createElement(
      'div',
      {
        key: 'modal-icon-section',
        className: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'
      },
      [
        // child element with the icon
        React.createElement(this.state.icon, {
          key: 'modal-icon',
          addCss: this.state.iconAddCss || ''
        })
      ]
    )
  }

  private renderDescription = () => {
    if ((this.state.longDesc || '').trim().length < 1) {
      return
    }
    return React.createElement(
      'div',
      {
        key: 'modal-long-desc-section',
        className: 'mt-2'
      },
      [
        // description text as <p> element:
        React.createElement(
          'p',
          {
            key: 'modal-long-desc-text',
            className: 'text-sm text-gray-500 text-center'
          },
          this.state.longDesc
        )
      ]
    )
  }

  // renders the text section with title and longDesc
  private renderTextSection = () => {
    return React.createElement(
      'div',
      {
        key: 'modal-text-section',
        className: 'mt-3 text-center sm:mt-5'
      },
      [
        // render title text as <h3> element:
        React.createElement(
          'h3',
          {
            key: 'modal-title',
            className: 'text-lg leading-6 font-medium'
          },
          this.state.title
        ),
        // render description section
        this.renderDescription()
      ]
    )
  }

  // renders the buttons section
  private renderButtonSection = () => {
    return React.createElement(
      'div',
      {
        key: 'modal-panel',
        className: 'mt-5 sm:mt-6 grid gap-3 sm:grid-cols-2 sm:grid-flow-row-dense'
      },
      [
        // cancel button:
        React.createElement(ElButton, {
          key: 'btn-modal-cancel',
          id: 'btn-modal-cancel',
          buttonType: 'secondary',
          disabled: false,
          label: this.state.cancelLabel,
          addCss: 'ml-2',
          onClicked: this.onCancelClick
        }),
        // confirm button:
        React.createElement(ElButton, {
          key: 'btn-modal-confirm',
          id: 'btn-modal-confirm',
          buttonType: this.state.primaryButtonType,
          disabled: false,
          label: this.state.confirmLabel,
          addCss: 'ml-2',
          onClicked: this.onConfirmClick
        })
      ]
    )
  }

  private renderModalPanel = () => {
    return React.createElement(
      'div',
      {
        key: 'modal-panel',
        className:
          'relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'
      },
      [this.renderIconSection(), this.renderTextSection(), this.renderButtonSection()]
    )
  }

  private renderInnerDiv = () => {
    return React.createElement(
      'div',
      {
        key: 'inner-div',
        className: 'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'
      },
      [
        // render background overlay:
        React.createElement('div', {
          key: 'background-overlay',
          className: 'fixed inset-0 bg-gray-400 bg-opacity-75',
          'aria-hidden': true
        }),
        // render trick:
        React.createElement(
          'div',
          {
            key: 'trick-div',
            className: 'hidden sm:inline-block sm:align-middle sm:h-screen',
            'aria-hidden': true
          },
          '\u200B'
        ), // this renders &ZeroWidthSpace; to allow centering the dialog
        // render modal panel
        this.renderModalPanel()
      ]
    )
  }

  render() {
    if (!this.state.isOpen) {
      return null
    }
    // render outer div
    return React.createElement(
      'div',
      {
        'data-testid': this.state.testid,
        className: this.cssClass(),
        'aria-labelledby': 'modal-title',
        role: 'dialog',
        'aria-modal': true
      },
      this.renderInnerDiv()
    )
  }
}
