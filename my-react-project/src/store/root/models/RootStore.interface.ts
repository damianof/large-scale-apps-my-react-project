// file: src/store/root/models/RootStore.interface.ts

import { ItemsStoreInterface } from '../../items'
// additional domain store interfaces will be imported here as needed

/**
 * @name RootStoreInterface
 * @description Interface represents our global state manager (store)
 */
export interface RootStoreInterface {
  itemsStore: ItemsStoreInterface
  // additional domain store modules will be added here as needed
}
