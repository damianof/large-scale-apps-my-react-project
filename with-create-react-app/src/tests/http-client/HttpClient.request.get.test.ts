// file: src/tests/http-client/HttpClient.request.get.test.ts

import axios from 'axios'
import { httpClient, HttpRequestType, HttpRequestParamsInterface } from '../../http-client'


let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}

// test our component click event
test('httpClient: reqest: should execute get request succesfully', () => {
  jest
    .spyOn(axios, 'get')
    .mockImplementation(async () => Promise.resolve({ data: `request completed: ${ mockRequestParams.url }`}));

  httpClient
    .request(mockRequestParams)
    .then((response) => {
      //console.debug('response:', response)
      expect(response).toEqual(`request completed: ${ mockRequestParams.url }`)
    })
    .catch(error => {
      console.info('HttpClient.request.get.test.ts: HttpClient.request(get) error', error)
    })
})

test('httpClient: reqest: get should throw error on rejection', () => {
  jest
    .spyOn(axios, 'get')
    .mockImplementation(async () => Promise.reject({ data: `request completed: ${ mockRequestParams.url }`}));

  httpClient
    .request(mockRequestParams)
    .catch(error => {
      expect(error).toBeDefined()
      expect(error.toString()).toEqual('Error: HttpClient exception')
    })
})
