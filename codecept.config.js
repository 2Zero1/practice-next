exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:8000',
      show: false,
      browser: 'chromium',
    },
  },
  include: {
    I: './tests/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'megaptera.kr',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
