import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // 🔹 Bloquer les requêtes vers pingAvailabilityTest
  on("task", {
    blockPingRequests() {
      cy.intercept("GET", "http://127.0.0.1:12546/pingAvailabilityTest", {
        statusCode: 200,
        body: {},
      }).as("blockPing");
      return null;
    },
  });

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "cypress/features/*.feature",
    setupNodeEvents,
    baseUrl: "https://automationexercise.com",
    supportFile: "cypress/support/e2e.ts",
    animationDistanceThreshold: 5,
    chromeWebSecurity: false,
    clientCertificates: [],
    defaultCommandTimeout: 4000,
    downloadsFolder: 'cypress/downloads',
    env: {
      requestTimeout: 10000,
      responseTimeout: 30000,
      __cypress_cucumber_preprocessor_dont_use_this_suite: {
        isEventHandlersAttached: true,
      }
    },
    excludeSpecPattern: '*.hot-update.js',
    execTimeout: 60000,
    fileServerFolder: '',
    fixturesFolder: 'cypress/fixtures',
    includeShadowDom: false,
    modifyObstructiveCode: true,
    numTestsKeptInMemory: 50,
    pageLoadTimeout: 60000,
    port: null,
    projectId: null,
    redirectionLimit: 20,
    reporter: 'spec',
    requestTimeout: 5000,
    responseTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    scrollBehavior: 'center',
    slowTestThreshold: 10000,
    taskTimeout: 60000,
    testIsolation: false,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: false,
    videoCompression: false,
    videosFolder: 'cypress/videos',
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,
  },
});
