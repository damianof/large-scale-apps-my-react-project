module.exports = {
  preset: "ts-jest",

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },

  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/jest/svgTransform.js",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
  },

  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ],
  
  moduleFileExtensions: [
    "js", 
    "ts", 
    "tsx"
  ]
}
