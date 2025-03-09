import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { go_To_Signup_And_Login_Page } from "cypress/integration/HomePage/HomeFunctionsPage";
import { check_ACCOUNT_DELETED_is_visible, click_on_delete_account, click_on_login_button, enter_correct_email_and_password, enter_incorrect_email_and_password, logged_in_as_username_is_visible, login_form_is_visible, message_login_error } from "cypress/integration/SignupLoginPage/SignupAndLoginFunctionsPage";


Given('The browser is launch', function() {
    cy.visit('http://automationexercise.com')
})

When('Navigate to url', function() {
    cy.visit('/')
    
})

Then('Verify that home page is visible successfully', function() {
    cy.get('img[alt="Website for automation practice"]').should('be.visible')
    cy.get('h1').should('be.visible')
    cy.get('h2').should('be.visible').contains("Full-Fledged practice website for Automation Engineers")
    cy.get('p').should('be.visible').contains("All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.")
    
})

When('Click on Signup and Login button', function() {
    go_To_Signup_And_Login_Page()
})

Then('Verify Login to your account is visible', function() {
    login_form_is_visible()
})

When('Enter correct email address and password', function() {
    enter_correct_email_and_password()
})

When('Click on Login button', function() {
    click_on_login_button()
})

When('Verify that Logged in as username is visible', function() {
    logged_in_as_username_is_visible()
})
    
When('Click Delete Account button', function() {
    click_on_delete_account()
})

When('Verify that ACCOUNT DELETED is visible', function() {
    check_ACCOUNT_DELETED_is_visible()
})
    
//LOGIN WITH INCORRECT ID

When('Enter incorrect email address and password', function() {
    enter_incorrect_email_and_password()
})

Then('Verify error message Your email or password is incorrect is visible', function() {
    message_login_error()
})