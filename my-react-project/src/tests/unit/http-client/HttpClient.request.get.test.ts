// file: src/tests/unit/http-client/HttpClient.request.get.test.ts
import axios from 'axios'
import { httpClient, HttpRequestType, HttpRequestParamsInterface } from '@/http-client'

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}

describe('HttpClient: request: get', () => {
  it('should execute get request succesfully', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(async () => Promise.resolve({ data: `request completed: ${mockRequestParams.url}` }))

    httpClient
      .request(mockRequestParams)
      .then((response) => {
        //console.debug('response:', response)
        expect(response).toEqual(`request completed: ${mockRequestParams.url}`)
      })
      .catch((error) => {
        console.info('HttpClient.request.get.test.ts: HttpClient.request(get) error', error)
      })
  })

  it(' get should throw error on rejection', () => {
    vitest.spyOn(axios, 'get').mockImplementation(async () =>
      Promise.reject({
        data: `[moq]: request completed: ${mockRequestParams.url}`
      })
    )

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined()
      expect(error.toString()).toEqual('Error: HttpClient exception')
    })
  })
})
