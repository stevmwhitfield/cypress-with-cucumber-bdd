/// <reference types="cypress" />

import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("executes before each scenario/test");
});

Before({ tags: "@smoke" }, () => {
    cy.log("executing @smoke tests");
});

After(() => {
    cy.log("executes after each scenario/test");
});

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
});
