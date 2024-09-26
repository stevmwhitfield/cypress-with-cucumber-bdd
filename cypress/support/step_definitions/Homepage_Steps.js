/// <reference types="cypress" />

import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Home_PO from "../page_objects/Home_PO";

// const url = "https://webdriveruniversity.com";

const basePage = new Base_PO();
const homePage = new Home_PO();

Before(() => {
    cy.log("executing steps for home page");
});

Given("I navigate to the home page", () => {
    // cy.visit(url);
    basePage.navigate();
});

When("I click on the contact us button", () => {
    // cy.openLinkInSameTab("#contact-us");
    homePage.clickOnContactUs();
});

When("I click on the login portal", () => {
    // cy.openLinkInSameTab("#login-portal");
    homePage.clickOnLoginPortal();
});
