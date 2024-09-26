/// <reference types="cypress" />

import Base_PO from "./Base_PO";

export default class Home_PO extends Base_PO {
    navigateToHomePage() {
        super.navigate();
    }

    clickOnContactUs() {
        cy.openLinkInSameTab("#contact-us");
    }

    clickOnLoginPortal() {
        cy.openLinkInSameTab("#login-portal");
    }
}
