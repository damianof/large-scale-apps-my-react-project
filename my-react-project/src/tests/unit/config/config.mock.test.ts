// file: src/tests/unit/config/config.mock.test.ts

// import the Config interface
import { ConfigInterface } from '../../../config/models/Config.interface'
// import a reference to the confiFilesMap
import { configFilesMap } from '../../../config/config-files-map'

describe('config: mock', () => {
  const config: ConfigInterface = configFilesMap.get('mock') as ConfigInterface

  it('instance should have "global" section', () => {
    expect(config).toHaveProperty('global')
  })

  it('instance should have "httpClient" section', () => {
    expect(config).toHaveProperty('httpClient')
  })

  it('instance should have "items" section', () => {
    expect(config).toHaveProperty('items')
  })

  describe('global', () => {
    const section = config.global
    it('section should have "version" property', () => {
      expect(section).toHaveProperty('version')
      expect(typeof section.version).toBe('number')
      expect(section.version).toBeGreaterThan(0)
    })
  })

  describe('httpClient', () => {
    const section = config.httpClient
    it('section should have "tokenKey" property', () => {
      expect(section).toHaveProperty('tokenKey')
    })

    it('section should have "clientType" property', () => {
      expect(section).toHaveProperty('clientType')
    })
  })

  describe('apiClient', () => {
    const section = config.apiClient
    it('section should have "type" property', () => {
      expect(section).toHaveProperty('type')
    })
  })

  describe('items', () => {
    const section = config.items

    it('section should have "apiClientOptions" property', () => {
      expect(section).toHaveProperty('apiClientOptions')
    })

    describe('apiClientOptions', () => {
      const apiClientOptions = section.apiClientOptions

      describe('endpoints', () => {
        const endpoints = apiClientOptions.endpoints

        it('section should have "fetchItems" property', () => {
          expect(endpoints).toHaveProperty('fetchItems')
          // verify that fetchItems url is a string and has a reasonable length
          expect(typeof endpoints.fetchItems).toBe('string')
          expect(endpoints.fetchItems.length).toBeGreaterThan(10)
        })
      })
    })
  })

  describe('localization', () => {
    const section = config.localization

    it('section should have "apiClientOptions" property', () => {
      expect(section).toHaveProperty('apiClientOptions')
    })

    it('section should have "locales" property', () => {
      expect(section).toHaveProperty('locales')
      // verify that locales is an array
      expect(Array.isArray(section.locales)).toBeTruthy
    })

    it('section should have "localStorageCache" property', () => {
      expect(section).toHaveProperty('localStorageCache')
      // verify that localStorageCache is an object
      expect(typeof section.localStorageCache).toBe('object')
    })

    describe('apiClientOptions', () => {
      const apiClientOptions = section.apiClientOptions

      describe('apiUrls', () => {
        const endpoints = apiClientOptions.endpoints

        it('section should have "fetchTranslation" property', () => {
          expect(endpoints).toHaveProperty('fetchTranslation')
          // verify that fetchTranslation url is a string and has a reasonable length
          expect(typeof endpoints.fetchTranslation).toBe('string')
          expect(endpoints.fetchTranslation.length).toBeGreaterThan(10)
        })
      })
    })

    describe('locales', () => {
      const locales = section.locales

      it('section should have at least 1 item ', () => {
        expect(locales.length).toBeGreaterThan(0)
      })
    })

    describe('localStorageCache', () => {
      const localStorageCache = section.localStorageCache

      it('section should have "enabled" property', () => {
        expect(localStorageCache).toHaveProperty('enabled')
        expect(typeof localStorageCache.enabled).toBe('boolean')
      })

      it('section should have "expirationInMinutes" property', () => {
        expect(localStorageCache).toHaveProperty('expirationInMinutes')
        expect(typeof localStorageCache.expirationInMinutes).toBe('number')
      })
    })
  })
})
