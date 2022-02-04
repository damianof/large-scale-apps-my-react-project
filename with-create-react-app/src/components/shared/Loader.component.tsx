// file: Loader.component.tsx

import React from 'react'

// Loader component
export class Loader extends React.Component {
  render(): React.ReactNode {
    return <div className="loader">
            <div className="bounceball"></div>
          </div>
  }
}
