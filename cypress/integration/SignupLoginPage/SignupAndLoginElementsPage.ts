
class Signup_And_Login_Elements_Page{
    // REGISTER
    new_user_signup_form(){
        return cy.get('.signup-form')
    }

    signup_name(){
        return cy.get('[data-qa="signup-name"]')
    }

    signup_email(){
        return cy.get('[data-qa="signup-email"]')
    }

    signup_button(){
        return cy.get('[data-qa="signup-button"]')
    }
    
    // REGISTER FORM 
    enter_account_information_title(){
        return cy.get('.title.text-center')
    }

    mr_radiobox(){
        return cy.get('#id_gender1')
    }

    mrs_radiobox(){
        return cy.get('#id_gender2')
    }

    name(){
        return cy.get('#name')
    }

    email_form(){
        return cy.get('#email')
    }

    password_form(){
        return cy.get('#password')
    }

    day_of_birth(day: number){
        return cy.get('#days').select(day)
    }

    month_of_birth(month : number){
        return cy.get('#months').select(month)
    }

    year_of_birth(year : string){
        return cy.get('#years').select(year)
    }

    newsletter_checkbox(){
        return cy.get("#newsletter")
    }

    offers_receive_checkbox(){
        return cy.get("#optin")
    }

    first_name(){
        return cy.get('[data-qa="first_name"]')
    }

    last_name(){
        return cy.get('[data-qa="last_name"]')
    }

    comapny(){
        return cy.get('[data-qa="company"]')
    }

    adress(){
        return cy.get('#address1')
    }

    adress2(){
        return cy.get('#address2')
    }

    country(country : string){
        return cy.get('#country').select(country)
    }

    state(){
        return cy.get('[data-qa="state"]')
    }

    city(){
        return cy.get('[data-qa="city"]')
    }

    zipcode(){
        return cy.get('[data-qa="zipcode"]')
    }

    mobile_number(){
        return cy.get('[data-qa="mobile_number"]')
    }
    
    create_account_button(){
        return cy.get('[data-qa="create-account"]')
    }


    // LOGIN 
    login_form(){
        return cy.get('.login-form')
    }

    email(){
        return cy.get('[data-qa="login-email"]')
    }

    password(){
        return cy.get('[data-qa="login-password"]')
    }

    login_button(){
        return cy.get('.btn.btn-default')
    }

    login_logo(){
        return cy.get('.fa.fa-user')
    }

    logged_user_name(){
        return cy.get('ul.nav.navbar-nav li a b')
    }

    delete_account_button(){
        return cy.get("a[href='/delete_account']")
    }

    account_deleted_title(){
        return cy.get('[data-qa="account-deleted"]')
    }

    account_deleted_text1(){
        return cy.get("p").eq(0)
    }

    account_deleted_text2(){
        return cy.get("p").eq(1)
    }


}
export default Signup_And_Login_Elements_Page