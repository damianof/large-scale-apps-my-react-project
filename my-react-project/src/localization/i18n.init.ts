import { initReactI18next } from 'react-i18next'
import i18n, { BackendModule, Services, TOptions, InitOptions, ReadCallback } from 'i18next'
//import Backend from 'i18next-http-backend'

import { apiClient } from '../api-client'

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
    apiClient.localization.fetchTranslation(namespace, key)
      .then((data: any) => {
        //console.log('translation data', typeof data, data)
        callback(null, data)
      })
      .catch((e) => {
        console.warn('i18n.init: exception loading translation data')
      })
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
