npm uninstall --save jest @testing-library/jest-dom @types/jest ts-jest @types/testing-library__jest-dom 

npm install --save-dev vitest c8 jsdom @testing-library/user-event 

package.json:
    "test": "vitest run",
    "test-watch": "vitest wach",

tsconfig.json (compilerOptions):
    "types": [
      "react",
      "vite/client", 
      "vitest/globals"
    ],
    "skipLibCheck": true,


vite.config.js:
  /// <reference types="vitest" />
  /// <reference types="vite/client" />

  # within defineComponent:
  ,
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      'node_modules'
    ]
  }


src/test-utils/index.tsx
