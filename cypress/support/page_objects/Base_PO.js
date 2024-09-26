/// <reference types="cypress" />

export default class Base_PO {
    navigate(path = "") {
        cy.fixture("config").then((config) => {
            cy.visit(config.baseUrl + path);
        });
    }

    getPageTitle() {
        return cy.title();
    }
}
