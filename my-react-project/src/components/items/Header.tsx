import React from 'react'
import { usei18n } from '../../localization/usei18n'

export function Header() {
  const { t } = usei18n()

  return (
    <h3>{ t('items.list.header') }:</h3>
  )
}
