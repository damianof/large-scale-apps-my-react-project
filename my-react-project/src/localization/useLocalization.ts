import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { userPreferredLocaleStorageKey } from './i18n.init'
import { config } from '../config'

export function useLocalization () {
  const instance = useTranslation('translation')
  const availableLocales = config.localization.locales

  return {
    t: instance.t,
    currentLocale: i18n.language,
    changeLocale: i18n.changeLanguage,
    locales: availableLocales,

    getUserPreferredLocale() {
      // try to retrive from local storage if they have one saved
      const preferredLocale = localStorage.getItem(userPreferredLocaleStorageKey)
      if (!preferredLocale) {
        const defaultLocale = availableLocales.find(o => o.isDefault)?.key
        return defaultLocale
      }
      return preferredLocale
    }
  }
}
