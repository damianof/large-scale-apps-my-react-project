// file: src/api-client/live/items/index.ts

// import a reference to the app config
import { config } from '../../../config'

import { 
  ItemsApiClientUrlsInterface, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../../models/api-client/items'

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel({ 
  urls: config.items.apiUrls
})

// export our instance
export {
  itemsApiClient
}
