// file: src/tests/unit/http-client/HttpClient.request.post.test.ts
import { vi } from 'vitest'

import axios from 'axios'
import { httpClient, HttpRequestType, HttpRequestParamsInterface } from '../../../http-client'

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.post,
  url: 'path/to/a/post/api/endpoint',
  requiresToken: false,
  payload: {}
}

type P = typeof mockRequestParams.payload

describe('HttpClient: request: post', () => {

  it('should execute post request succesfully', () => {
    vi
      .spyOn(axios, 'post')
      .mockImplementation(async () => Promise.resolve({ data: `request completed: ${mockRequestParams.url}` }))

    httpClient
      .request<string, P>(mockRequestParams)
      .then((response) => {
        //console.debug('response:', response)
        expect(response).toEqual(`request completed: ${mockRequestParams.url}`)
      })
      .catch((error) => {
        console.info('HttpClient.request.post.test.ts: HttpClient.request(post) error', error)
      })
  })

})
