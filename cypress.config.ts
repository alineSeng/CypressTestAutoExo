import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Définit le modèle de recherche
    supportFile: 'cypress/support/e2e.ts',
    excludeSpecPattern: '*.json', // Par exemple, exclut les réponses JSON ou pings
    // chromeWebSecurity: false,
    // requestTimeout: 1500,
    // responseTimeout: 1500,
    // defaultCommandTimeout: 1500
    baseUrl: "https://automationexercise.com/"
  },
});
