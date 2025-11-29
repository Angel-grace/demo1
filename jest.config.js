require("dotenv/config");

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "json", "jsx"],
  transform: {"^.+\\.[tj]sx?$": "babel-jest"},

  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },

  collectCoverage: true,
  coverageDirectory: "coverage",

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
