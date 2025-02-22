class Home_Elements_Page{

    Home() {
        return cy.get('.fa.fa-home')
    }

    Products() {
        return cy.get('.material-icons.card_travel')
    }

    Cart() {
        return cy.get('.fa.fa-shopping-cart')
    }

    Signup_Login() {
        return cy.get('.fa.fa-lock')
    }

    
}
export default Home_Elements_Page