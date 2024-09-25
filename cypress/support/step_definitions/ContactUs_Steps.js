/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
    cy.get('[name="first_name"]').type("John");
});

When("I type a last name", () => {
    cy.get('[name="last_name"]').type("Doe");
});

When("I type an email address", () => {
    cy.get('[name="email"]').type("john.doe@example.com");
});

When("I type a comment", () => {
    cy.get('[name="message"]').type("Hello, this is a test message.");
});

When("I click on the submit button", () => {
    cy.get('[type="submit"]').click();
});

Then("I should see a thank you message", () => {
    cy.get("h1").contains("Thank You for your Message!");
});
