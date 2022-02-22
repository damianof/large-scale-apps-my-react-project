import { initReactI18next } from 'react-i18next'
import i18n, { BackendModule, Services, TOptions, InitOptions, ReadCallback } from 'i18next'
//import Backend from 'i18next-http-backend'

import { config } from '../config'
import { apiClient } from '../api-client'
import { combineReducers } from '@reduxjs/toolkit'

// key will use to save the user preferred locale id
export const userPreferredLocaleStorageKey = 'user-lcid'

const getLocaleData = async (namespace: string, lcid: string): Promise<Object> => {
  // try to get it from locale storage
  // dynamic key we use to cache the actual locale JSON data in the browser local storage
  const localeStorageKey = `lcid-data-${ lcid }`
  const localStorageConfig = config.localization.localStorageCache
  const cacheEntryStr = localStorage.getItem(localeStorageKey) || '{}'
  let cacheEntry: { appVersion: number, expiresAt: number, json: string } = { appVersion: -1, expiresAt: 0, json: '' }

  if (localStorageConfig.enabled) {
    try {
      cacheEntry = JSON.parse(cacheEntryStr)
    } catch (e) {
      console.warn('error parsing data', cacheEntryStr)
    }
  }

  console.log('cacheEntry?.expiresAt - Date.now()', cacheEntry?.expiresAt - Date.now())
  console.log('typeof cacheEntry.json', typeof cacheEntry.json)

  // also save the user preference
  localStorage.setItem(userPreferredLocaleStorageKey, lcid)

  // check if we have cacheEntry and if matches app version and also did not expire
  if (cacheEntry && cacheEntry.appVersion === config.global.version && cacheEntry.expiresAt - Date.now() > 0) {
    // set from cache
    return cacheEntry.json
  } else {
    // retrieve data from API end point (or CDN etc)
    const translationData = await apiClient.localization.fetchTranslation(namespace, lcid)

    // update our cache
    const dt = new Date()
    const expiresAt = dt.setMinutes(dt.getMinutes() + Number(localStorageConfig.expirationInMinutes))
    if (localStorageConfig.enabled) {
      localStorage.setItem(localeStorageKey, JSON.stringify({
        appVersion: config.global.version,
        expiresAt: expiresAt,
        json: translationData
      }))
    }

    return translationData
  }
}

// custom backend module that allow us to use our own api client
const backendModule: BackendModule = {
  type: 'backend',
  init(services: Services, backendOptions: TOptions, i18nextOptions: InitOptions): void {
    // console.log('backendModule inittypeof services', typeof services)
    // console.log('backendModule init backendOptions', backendOptions)
    // console.log('backendModule init i18nextOptions', i18nextOptions)
  },
  read(language: string, namespace: string, callback: ReadCallback): void {
    console.log('backendModule read', language, namespace)

    const key = language
    getLocaleData(namespace, key)
      .then(obj => callback(null, obj))
  }
}


// i18n
// .use(initReactI18next) // passes i18n down to react-i18next
// .use(Backend)
// .init({
//   lng: 'en-US',
//   fallbackLng: 'en-US',
//   keySeparator: false,

//   interpolation: {
//     escapeValue: false,
//     /**
//      * Add interpolation format method to customize the formatting
//      */
//     format: (value, format, lng) => {
//       if (format === 'uppercase') {
//         return value.toUpperCase();
//       }

//       return value;
//     }
//   },
//   load: 'currentOnly',
//   backend: {
//     loadPath: '/static//mock-dat/localization/{{ns}}/{{lng}}.json'
//   }
// });


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(backendModule)
  .init({
    lng: 'en-US',
    fallbackLng: 'en-US',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      /**
       * Add interpolation format method to customize the formatting
       */
      format: (value, format, lng) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        return value;
      }
    },
    load: 'currentOnly',
    backend: {
    }
  });
