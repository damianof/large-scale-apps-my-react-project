// file: src/api-client/live/items/index.ts

// import a reference to the app config
import { config } from '@/config'

import { ItemsApiClientInterface, ItemsApiClientModel } from '../../models'

// instantiate the ItemsApiClient pointing at the url that returns live data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(config.items.apiClientOptions)

// export our instance
export { itemsApiClient }
