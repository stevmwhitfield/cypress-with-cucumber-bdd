/// <reference types="cypress" />

import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://webdriveruniversity.com";

Before(() => {
    cy.log("executing steps for home page");
});

Given("I navigate to the home page", () => {
    cy.visit(url);
});

When("I click on the contact us button", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
});

When("I click on the login portal", () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();
});
