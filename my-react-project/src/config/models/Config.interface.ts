// file: src/config/models/Config.interface.ts

import {
  ItemsApiClientUrlsInterface,
  LocalizationApiClientUrlsInterface
} from '../../models/api-client'

/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
    version: number
  }

  httpClient: {
    tokenKey: string
  }

  apiClient: {
    type: string
  }

  items: {
    apiUrls: ItemsApiClientUrlsInterface
  }

  localization: {
    apiUrls: LocalizationApiClientUrlsInterface
    locales: { key: string, isDefault: boolean }[]
    localStorageCache: { enabled: boolean, expirationInMinutes: number }
  }
}
