/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();

let stub;

Given("I navigate to the login page", () => {
    loginPage.navigateToLoginPage();
});

When("I type a username {word}", (username) => {
    loginPage.typeUsername(username);
});

When("I type a password {word}", (password) => {
    loginPage.typePassword(password);
});

When("I click on the login button", () => {
    stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#login-button").click();
});

Then("I should see an alert containing {string}", (alertText) => {
    expect(stub).to.have.been.calledWith(alertText);
});
