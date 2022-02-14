import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

export function usei18n () {
  const instance = useTranslation('translation')

  return {
    t: instance.t,
    changeLanguage: i18n.changeLanguage
  }
}
