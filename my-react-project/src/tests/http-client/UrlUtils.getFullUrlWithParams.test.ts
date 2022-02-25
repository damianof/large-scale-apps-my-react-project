// file: src/tests/unit/http-client/UrlUtils.getFullUrlWithParams.test.ts

import { UrlUtils } from '../../http-client'

// test our component click event
test('UrlUtils: getFullUrlWithParams: should return fullUrl formatted as expected with one param', () => {
  const baseUrl = 'https://unit-test-api/v1/patients/[organizationId]/demographics'
  const params = {
    organizationId: 5346782
  }
  const result = UrlUtils.getFullUrlWithParams(baseUrl, params)

  expect('https://unit-test-api/v1/patients/5346782/demographics').toEqual(result)
})

// test our component click event
test('UrlUtils: getFullUrlWithParams: should return fullUrl formatted as expected with multiple params', () => {
  const baseUrl = 'https://unit-test-api/v1/patients/[organizationId]/[country]/[state]/[cityId]'
  const params = {
    organizationId: 5346782,
    country: 'USA',
    state: 'CA',
    cityId: 'abcdef12345'
  }
  const result = UrlUtils.getFullUrlWithParams(baseUrl, params)

  expect('https://unit-test-api/v1/patients/5346782/USA/CA/abcdef12345').toEqual(result)
})
