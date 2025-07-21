module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/step_definitions/**/*.ts'],
    format: [
      'allure-cucumberjs/reporter',
      '@cucumber/pretty-formatter'
    ],
    formatOptions: {
      'allure-cucumberjs': {
        resultsDir: 'allure-results'
      }
    }
  }
}; 