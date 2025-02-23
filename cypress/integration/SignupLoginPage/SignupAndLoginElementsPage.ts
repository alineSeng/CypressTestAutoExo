
class Signup_And_Login_Elements_Page{
    email(){
        return cy.get('[data-qa="login-email"]')
    }
    
    password(){
        return cy.get('[data-qa="login-password"]')
    }

    login_button(){
        return cy.get('.btn.btn-default')
    }

    login_form(){
        return cy.get('.login-form')
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