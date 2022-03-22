import React from 'react'
import { useLocalization } from '@/localization'

export function Header() {
  const { t } = useLocalization()

  return <h3>{t('items.list.header')}:</h3>
}
