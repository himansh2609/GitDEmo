
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {


  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}




module.exports = defineConfig({
  chromeWebSecurity: false,
env:{

url : "https://rahulshettyacademy.com"
},

retries:{

  "runMode": 1, "openMode": 1 
},
projectID:"25h31b",


  e2e: {
    setupNodeEvents,
    specPattern: '**/*.feature'
    
  },
});

