// file: Loader.component.tsx

import * as React from 'react'

type Props = {
  locales: { key: string }[]
  currentLocale: string
  onLocaleClick: Function
  t: Function
}

export class LocaleSelector extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    const { locales, currentLocale, onLocaleClick, t } = this.props

    return (
      <div className="locale-selector">
        {
          /* loop through the locales and create a radio button for each locale */
          locales.map((item) => {
            const radioId = `radio-locale-${item.key}`
            return (
              <label
                key={item.key}
                htmlFor={radioId}
                className="cursor-pointer"
                onClick={() => onLocaleClick(item.key)}
              >
                <input
                  type="radio"
                  id={radioId}
                  radioGroup={currentLocale}
                  name="locale"
                  value={item.key}
                  checked={currentLocale === item.key}
                  onChange={() => {}}
                />
                {
                  /* use the t function to translate the label of this radio */
                  t(`locale.selector.${item.key}`)
                }
              </label>
            )
          })
        }
      </div>
    )
  }
}
