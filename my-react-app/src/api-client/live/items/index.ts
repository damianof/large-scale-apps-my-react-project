// file: src/api-client/live/items/index.ts

import { 
  ItemsApiClientUrlsInterface, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../../models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel({ urls })

// export our instance
export {
  itemsApiClient
}
