import Signup_And_Login_Elements_Page from "./SignupAndLoginElementsPage"

const signup_And_Login_Elements_Page = new Signup_And_Login_Elements_Page()
const email = "dq@f.fr"
const password = "1234"

// LOGIN USER
export const login_form_is_visible = () => {
    signup_And_Login_Elements_Page.login_form().should('be.visible')
}

export const enter_correct_email_and_password = () => {
    signup_And_Login_Elements_Page.email().type(email)
    signup_And_Login_Elements_Page.password().type(password)
}

export const click_on_login_button = () => {
    signup_And_Login_Elements_Page.login_button().first().click()
}

export const logged_in_as_username_is_visible = () => {
    signup_And_Login_Elements_Page.login_logo().should('be.visible')
    signup_And_Login_Elements_Page.logged_user_name().should('be.visible').contains(email)
}

export const click_on_delete_account = () => {
    signup_And_Login_Elements_Page.delete_account_button().should('be.visible').click()
}

export const check_ACCOUNT_DELETED_is_visible = () => {
    signup_And_Login_Elements_Page.account_deleted_text1().should("have.text", "Your account has been permanently deleted!")
    signup_And_Login_Elements_Page.account_deleted_text2().should("have.text", "You can create new account to take advantage of member privileges to enhance your online shopping experience with us.")
}

// REGISTER USER
export const New_Use_Signup_is_visible = () => {
    signup_And_Login_Elements_Page.new_user_signup_form().should("be.visible")
}

export const enter_name_and_email = () => {
    signup_And_Login_Elements_Page.signup_name().type(email)
    signup_And_Login_Elements_Page.signup_email().type(email)
}

export const click_on_signup_button = () => {
    signup_And_Login_Elements_Page.signup_button().click()
}

// REGISTER USER FORM
export const enter_account_information_title_is_visible = () => {
    signup_And_Login_Elements_Page.enter_account_information_title().should('be.visible')
}

export const mister_Mr = () => {
    signup_And_Login_Elements_Page.mr_radiobox().click()
}

export const misses_Mrs = () => {
    signup_And_Login_Elements_Page.mrs_radiobox().click()
}

export const fill_details_form = () => {
    signup_And_Login_Elements_Page.mrs_radiobox().click()
    signup_And_Login_Elements_Page.name().should("have.value", email)
    signup_And_Login_Elements_Page.email_form().should("have.value", email)
    signup_And_Login_Elements_Page.password_form().type("1234")
    signup_And_Login_Elements_Page.day_of_birth(3)
    signup_And_Login_Elements_Page.month_of_birth(11)
    signup_And_Login_Elements_Page.year_of_birth("1991")


}

export const select_newsletter_checkbox = () => {
    signup_And_Login_Elements_Page.newsletter_checkbox().check()
}

export const select_offers_receive_checkbox = () => {
    signup_And_Login_Elements_Page.offers_receive_checkbox().check()
}