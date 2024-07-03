const { defineConfig, devices } = require('@playwright/test');
const path = require('path');
const resultsDir = path.resolve('./','output')
require('dotenv').config({ path: path.resolve(__dirname, 'my.env')});

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1600, height: 900},
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    actionTimeout: 60000,
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['junit', {outputFile: `${resultsDir}/results.xml`}],
    ['html', {outputFolder: `${resultsDir}/html`, open: 'never'}]
  ]
});