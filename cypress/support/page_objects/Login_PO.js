/// <reference types="cypress" />

import Base_PO from "./Base_PO";

export default class Login_PO extends Base_PO {
    navigateToLoginPage() {
        super.navigate("/Login-Portal/index.html");
    }

    typeUsername(username) {
        cy.get("#text").type(username);
    }

    typePassword(password) {
        cy.get("#password").type(password);
    }

    clickOnLoginButton() {
        cy.get("#login-button").click();
    }
}
