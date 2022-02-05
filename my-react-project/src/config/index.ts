// file: src/config/index.ts
// returns appropriate config based on env VITE_APP_CONFIG

// import a reference to our Config interface:
import { ConfigInterface } from './models/Config.interface'

// import reference to configFilesMap
import { configFilesMap } from './config-files-map'

// helper to read the value of  VITE_APP_CONFIG
const getAppConfigKey = (): string => {
  // @ts-ignore
  return (import.meta.env.VITE_APP_CONFIG || '').trim()
}

// optional: you can console.log the content of import.meta.env to inspect its value:
console.log(`------ env ---- "${ getAppConfigKey() }"`)

if (!configFilesMap.has(getAppConfigKey())) {
  throw Error(`Could not find config for VITE_APP_CONFIG key "${ getAppConfigKey() }"`)
}

export const config: ConfigInterface = configFilesMap.get(getAppConfigKey())