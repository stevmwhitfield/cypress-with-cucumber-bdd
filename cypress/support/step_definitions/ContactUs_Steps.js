/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_objects/ContactUs_PO";

const contactUsPage = new ContactUs_PO();

When("I type a first name", () => {
    contactUsPage.typeFirstName("John");
});

When("I type a last name", () => {
    contactUsPage.typeLastName("Doe");
});

When("I type an email address", () => {
    contactUsPage.typeEmail("john.doe@example.com");
});

When("I type a comment", () => {
    contactUsPage.typeComment("Hello, this is a test message.");
});

When("I click on the submit button", () => {
    contactUsPage.clickSubmit();
});

Then("I should see a thank you message", () => {
    contactUsPage.validateSubmissionText("Thank You for your Message!");
});

Then("I should see an error message", () => {
    contactUsPage.validateSubmissionText("Error");
});

When("I type a specific first name {string}", (firstName) => {
    contactUsPage.typeFirstName(firstName);
});

When("I type a specific last name {string}", (lastName) => {
    contactUsPage.typeLastName(lastName);
});

When("I type a specific email address {string}", (email) => {
    contactUsPage.typeEmail(email);
});

When(
    "I type a specific word {string} and number {int} in the comment field",
    (word, number) => {
        contactUsPage.typeComment(word + " " + number);
    }
);

When(
    "I type a first name {word} and a last name {string}",
    (firstName, lastName) => {
        contactUsPage.typeFirstName(firstName);
        contactUsPage.typeLastName(lastName);
    }
);

When(
    "I type an email address {string} and a comment {string}",
    (email, comment) => {
        contactUsPage.typeEmail(email);
        contactUsPage.typeComment(comment);
    }
);

Then("I should see a {string} message", (message) => {
    contactUsPage.validateSubmissionText(message);
});
