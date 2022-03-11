import React from 'react'
import { useLocalization } from '@/localization/useLocalization'

export function Header() {
  const { t } = useLocalization()

  return <h3>{t('items.list.header')}:</h3>
}
