import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { check_Account_Created, check_ACCOUNT_DELETED_is_visible, click_on_continue_button, click_on_Create_Account_button, click_on_delete_account, click_on_signup_button, enter_account_information_title_is_visible, enter_name_and_email, fill_adress_info_details, fill_details_form, logged_in_as_username_is_visible, misses_Mrs, mister_Mr, New_Use_Signup_is_visible, select_newsletter_checkbox, select_offers_receive_checkbox } from "cypress/integration/SignupLoginPage/SignupAndLoginFunctionsPage";
import { checkServerIdentity } from "node:tls";

Then('Verify New User Signup! is visible', function() {
  New_Use_Signup_is_visible()
})

When('Enter name and email address', function() {
  enter_name_and_email()
})

When('Click Signup button', function() {
  click_on_signup_button()
})

Then('Verify that ENTER ACCOUNT INFORMATION is visible', function() {
  enter_account_information_title_is_visible()
})

When('Fill details: Title, Name, Email, Password, Date of birth', function() {
  mister_Mr()
  misses_Mrs()
  fill_details_form()
})

 
When('Select checkbox Sign up for our newsletter!', function() {
  select_newsletter_checkbox()
})
 
When('Select checkbox Receive special offers from our partners!', function() {
  select_offers_receive_checkbox()
})

When('Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', function() {
  fill_adress_info_details()
})

When('Click on Create Account button', function() {
  click_on_Create_Account_button()
})

Then('Verify that ACCOUNT CREATED is visible', function() {
  check_Account_Created()
})

When('Click on Continue button', function() {
  click_on_continue_button()
})

Then('Verify that Logged in as username is visible from register page', function() {
  logged_in_as_username_is_visible()
})

When('Click Delete Account button from register page', function() {
  click_on_delete_account()
})

Then('Verify that ACCOUNT DELETED is visible and click Continue button from register page', function() {
  check_ACCOUNT_DELETED_is_visible()
  click_on_continue_button()
})




