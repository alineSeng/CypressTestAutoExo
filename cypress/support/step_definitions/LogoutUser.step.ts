import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { click_on_logout_button, verify_that_user_is_navigated_to_the_login_page } from "cypress/integration/SignupLoginPage/SignupAndLoginFunctionsPage"


When('Click on logout button', function() {
    click_on_logout_button()
})

Then('Verify that user is navigated to the login page', function() {
    verify_that_user_is_navigated_to_the_login_page()
})