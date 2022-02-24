import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import {
  getUserPreferredLocale,
  setUserPreferredLocale
 } from './i18n.init'
import { config } from '../config'

export function useLocalization () {
  const instance = useTranslation('translation')
  const availableLocales = config.localization.locales

  return {
    t: instance.t,
    currentLocale: i18n.language,
    changeLocale: (lcid: string) => {
      i18n.changeLanguage(lcid)
      // also save the user preference
      setUserPreferredLocale(lcid)
    },
    locales: availableLocales,
    getUserPreferredLocale
  }
}
