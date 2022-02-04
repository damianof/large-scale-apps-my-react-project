// file: src/api-client/index.ts

import { ApiClientInterface } from '../models/api-client/ApiClient.interface'
import { apiMockClient } from './mock'
import { apiLiveClient } from './live'

let env: string = 'mock'
// if (import.meta) {
//   //env = (import.meta.env.VITE_APP_API_CLIENT || '').trim()
// }

// return either the live or the mock client
let apiClient: ApiClientInterface
if (env === 'live') {
    apiClient = apiLiveClient
} else {
    apiClient = apiMockClient
}

export { 
  apiClient
}
