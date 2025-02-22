import Home_Elements_Page from "./HomeElementsPage"

const home_Elements_Page = new Home_Elements_Page()

export const go_To_Home_Page = () => {
    home_Elements_Page.Home().click()
}

export const go_To_Products_Page = () => {
    home_Elements_Page.Products().click()
}

export const go_To_Cart_Page = () => {
    home_Elements_Page.Cart().click()
}

export const go_To_Signup_And_Login_Page = () => {
    home_Elements_Page.Signup_Login().click()
}