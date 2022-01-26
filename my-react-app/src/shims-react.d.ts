// file: src/shims-react.d.ts

declare interface process {
  env: {
    REACT_APP_API_CLIENT: string
  }
}
