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
    // tests against the global section eventually go here
  })

  describe('httpClient', () => {
    const section = config.httpClient
    it('section should have "tokenKey" property', () => {
      expect(section).toHaveProperty('tokenKey')
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

    it('section should have "apiUrls" property', () => {
      expect(section).toHaveProperty('apiUrls')
    })

    describe('apiUrls', () => {
      const apiUrls = section.apiUrls

      it('section should have "fetchItems" property', () => {
        expect(apiUrls).toHaveProperty('fetchItems')
        // verify that fetchItems url is a string and has a reasonable length
        expect(typeof apiUrls.fetchItems).toBe('string')
        expect(apiUrls.fetchItems.length).toBeGreaterThan(10)
      })
    })
  })

})
