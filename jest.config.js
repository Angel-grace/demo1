require('dotenv').config(); 
 
module.exports = {
  mode: "testops",
  fallback: "report",
  debug: false,
  environment: "local",
  captureLogs: true,
  report: {
    driver: "local",
    connection: {
      local: {
        path: "./build/qase-report",
        format: "json"
      }
    }
  },
  testops: {
    api: {
      token: process.env.QASE_TESTOPS_API_TOKEN, 
      host: "qase.io"
    },
    run: {
      title: "Demo test run",
      description: "Regress run description",
      complete: true
    },
    defect: false,
    project: process.env.QASE_TESTOPS_PROJECT, 
    batch: {
      size: 100
    }
  }
};