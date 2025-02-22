import { go_To_Cart_Page, go_To_Home_Page, go_To_Products_Page } from "cypress/integration/HomePage/HomeFunctionsPage";

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Test Case 1: Register User', () => {
  before(() => {
    // Aller sur le site
    cy.visit('/');
  });

  it('Verify that home page is visible successfully', () => {
    // Vérifier que le logo est visible
    cy.get('img[alt="Website for automation practice"]').should('be.visible');
    cy.get('h1').should('be.visible')
    cy.get('h2').should('be.visible').contains("Full-Fledged practice website for Automation Engineers")
    cy.get('p').should('be.visible').contains("All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.")
    

  });

  it('Naviguer vers la page des produits', () => {
    cy.visit('/');
    // Cliquer sur le bouton "Products"
    cy.contains('Products').click();
    //cy.url().should('contains', 'https://www.automationexercise.com/products')

    // Vérifier qu'on est sur la page des produits
    cy.get('.features_items h2').should('contain.text', 'All Products');
  });

  it('Effectuer une recherche de produit', () => {
    cy.visit('/products');
    // Entrer un mot-clé et rechercher
    cy.get('#search_product').type('dress');
    cy.get('#submit_search').click();

    // Vérifier que les résultats de recherche contiennent des produits
    //cy.get('p').should('contain.text', 'dress');
  });

  it("GoHome", () => {
    cy.visit('/products');
    go_To_Home_Page()
    //goToCartPage()
    //cy.screenshot()
    go_To_Products_Page()
    //cy.screenshot()
   

  });

});

