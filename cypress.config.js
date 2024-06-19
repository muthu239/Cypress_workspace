const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: 'cypress/integration/examples/*.js'
    specPattern: ['cypress/integration/examples/*.js','cypress/integration/pageObjects/*.js'],  //Multiple spec files
    defaultCommandTimeout: 6000,
    env: {
      url : "https://rahulshettyacademy.com",
      userID : "roronoa",
      pwd : "pwdHere"
    }
  },
});
