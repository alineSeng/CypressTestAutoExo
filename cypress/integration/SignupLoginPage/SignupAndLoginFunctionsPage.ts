import Signup_And_Login_Elements_Page from "./SignupAndLoginElementsPage"

const signup_And_Login_Elements_Page = new Signup_And_Login_Elements_Page()
const email = "dq@f.fr"
const password = "1234"

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
