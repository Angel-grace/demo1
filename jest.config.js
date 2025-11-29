require("dotenv/config");

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // Use jsdom for React component testing
  testEnvironment: "jsdom",

  // Match test files
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],

  // Recognize JS + JSX
  moduleFileExtensions: ["js", "json", "jsx"],

  // Transform JSX → JS using babel-jest
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },

  // Aliases (optional)
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },

  // Coverage settings
  collectCoverage: true,
  coverageDirectory: "coverage",

  // Jest + Qase reporters
  reporters: [
    "default",
    [
      "jest-qase-reporter",
      {
        mode: process.env.QASE_MODE || "report", 
        debug: true,

        testops: {
          api: {
            token: process.env.QASE_API_TOKEN,
          },
          project: process.env.QASE_PROJECT_CODE,
          uploadAttachments: true,

          run: {
            title: `unit-test/${process.env.APP_NAME || "github-repo"}`,
            description: "Automated Test run triggered by Jest tests",
            complete: true,
          },
        },
      },
    ],
  ],
};
