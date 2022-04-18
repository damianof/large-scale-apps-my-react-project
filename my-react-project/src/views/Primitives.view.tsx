// file: src/views/Primitives.view.tsx
import * as React from 'react'
import { ElText } from '@/components/primitives/text/ElText'
import { ElButton } from '@/components/primitives/buttons/ElButton'
import { ElToggle } from '@/components/primitives/toggles/ElToggle'
import { ElIconAlert } from '@/components/primitives/icons'
import { useModal } from '@/components/primitives/modals/useModal'

// Primitives View:
function PrimitivesView() {
  const [state, setState] = React.useState({
    toggleItemState: [
      {
        id: 'toggle-a',
        checked: true
      },
      {
        id: 'toggle-b',
        checked: false
      },
      {
        id: 'toggle-c',
        checked: false
      }
    ]
  })

  const onButtonClicked = (id: string) => {
    console.log('onButtonClicked', id)
  }

  const onOpenDialogClicked = async (id: string) => {
    console.log('PrimitivesView: onOpeanDialogClicked', id)

    // handle the new buttons with id "open-modal-x" (we'll be adding shortly)
    if (id === 'open-modal-1') {
      // here we invoke our useModal with the custom labels for the buttons
      const modal = useModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Ok',
        primaryButtonType: 'danger'
      })
      // then we invoke modal.prompt() and await it
      const result = await modal.prompt('Do you want to delete this record?')
      // the result will be true if the user click on COnfirm, or false if click on Cancel
      console.log('----- PrimitivesView: onButtonClicked: modal-1 prompt result', result)
    } else if (id === 'open-modal-2') {
      // here we invoke our useModal with the custom labels for the buttons + icon and iconAddCss props
      const modal = useModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm?',
        longDesc: 'This has also a longer description and an icon',
        icon: ElIconAlert, // here we use the icon component created earlier
        iconAddCss: 'text-red-600'
      })
      // then we invoke modal.prompt() and await it
      const result = await modal.prompt('Do you confirm this action?')
      // the result will be true if the user click on COnfirm, or false if click on Cancel
      console.log('----- PrimitivesView: onButtonClicked: modal-2 prompt result', result)
    }
  }

  const onToggleClicked = (id: string) => {
    console.log(`You clicked the "${id}" toggle`)
    const stateItem = state.toggleItemState.find((item) => item.id === id)
    if (stateItem) {
      // toggle the value of the ElToggle that was clicked
      stateItem.checked = !stateItem.checked
      // update the state
      setState({
        ...state
      })
    }
  }

  // return our render function
  return (
    <div className="primitives">
      <ElText tag="h1" addCss="text-gray-500" text="Primitives" />
      <ElText tag="h2" addCss="text-gray-500" text="ElText examples:" />
      <div className="p-6 border">
        <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element" />
        <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element" />
      </div>

      <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:" />
      <div className="p-6 border">
        <ElButton id="my-button-1" disabled={false} label="This is a button" onClicked={onButtonClicked} />
        <ElButton
          id="my-button-2"
          disabled={true}
          label="This is a disabled button"
          addCss="ml-2"
          onClicked={onButtonClicked}
        />
        <ElButton
          id="open-modal-1"
          disabled={false}
          label="Open modal 1"
          addCss="ml-2"
          onClicked={onOpenDialogClicked}
        />
        <ElButton
          id="open-modal-2"
          disabled={false}
          label="Open modal 2"
          addCss="ml-2"
          onClicked={onOpenDialogClicked}
        />
      </div>

      <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
      <div className="p-6 border">
        <ElToggle
          id="toggle-a"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-a')?.checked}
          disabled={false}
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-b"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-b')?.checked}
          disabled={true}
          addCss="ml-2"
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-c"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-c')?.checked}
          disabled={false}
          addCss="ml-2"
          onClicked={onToggleClicked}
        />
      </div>
    </div>
  )
}

export default PrimitivesView
