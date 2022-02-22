// file: src/localization/useLocalization.ts

import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { config } from '../config'

// import references to our localeStorage helpers:
import {
  getUserPreferredLocale,
  setUserPreferredLocale
 } from './i18n.init'

// useLocalization hook
export function useLocalization () {
  // we have to invoke react-i18next's useTranslation here
  const instance = useTranslation('translation')

  return {
    t: instance.t, //returna the t translator function from useTranslation
    currentLocale: i18n.language, // return the current locale from i18n
    changeLocale: (lcid: string) => { // return helper method changeLocale
      i18n.changeLanguage(lcid)
      // also save the user preference
      setUserPreferredLocale(lcid)
    },
    locales: config.localization.locales, // retrun vailable locales from our config
    getUserPreferredLocale 
  }
}
