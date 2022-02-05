// file: src/config/models/Config.interface.ts

import { ItemsApiClientUrlsInterface } from '../../models/api-client/items'

/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
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
}
