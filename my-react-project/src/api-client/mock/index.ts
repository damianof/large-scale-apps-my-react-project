// file: src/api-client/mock/index.ts

import { ApiClientInterface } from '../models/ApiClient.interface'
import { localizationApiClient } from './localization'
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  localization: localizationApiClient,
  items: itemsApiClient
}

// export our instance
export {
  apiMockClient
}
