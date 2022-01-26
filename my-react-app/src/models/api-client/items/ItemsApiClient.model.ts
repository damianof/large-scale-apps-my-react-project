// file: src/models/api-client/items/ItemsApiClient.model.ts

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

import { ItemsApiClientUrlsInterface } from './ItemsApiClientUrls.interface'
import { ItemsApiClientInterface } from './ItemsApiClient.interface'
import { ItemInterface } from '../../items/Item.interface'

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
 export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface
  private readonly mockDelay: number = 0

  constructor(options: {
    urls: ItemsApiClientUrlsInterface,
    mockDelay?: number
  }) {
    this.urls = options.urls
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
      const url = this.urls.fetchItems

      // axios options
      const options: AxiosRequestConfig = {
        headers: {
        }
      }

      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          if (!this.mockDelay) {
            resolve(response.data as ItemInterface[])
          } else {
            setTimeout(() => {
              resolve(response.data as ItemInterface[])
            }, this.mockDelay)
          }
        })
        .catch((error: any) => {
            console.error('ItemsApiClient: HttpClient: Get: error', error)
        })
    })
  }
}
