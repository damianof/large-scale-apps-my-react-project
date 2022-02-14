// file: src/models/api-client/localization/LocalizationApiClient.interface.ts


/**
 * @Name LocalizationApiClientInterface
 * @description
 * Interface for the Localization api client module
 */
export interface LocalizationApiClientInterface {
  fetchTranslation: (namespace: string, key: string) => Promise<{ [key: string]: string }>
}
