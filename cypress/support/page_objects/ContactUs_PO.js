/// <reference types="cypress" />

import Base_PO from "./Base_PO";

export default class ContactUs_PO extends Base_PO {
    elements = {
        firstNameInput: () => cy.get('[name="first_name"]'),
        lastNameInput: () => cy.get('[name="last_name"]'),
        emailInput: () => cy.get('[name="email"]'),
        commentInput: () => cy.get('[name="message"]'),
        submitButton: () => cy.get('[type="submit"]'),
        submissionText: () => cy.get("h1, body"),
    };

    navigateToContactUsPage() {
        super.navigate("/Contact-Us/contactus.html");
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typeComment(comment) {
        this.elements.commentInput().type(comment);
    }

    clickSubmit() {
        this.elements.submitButton().click();
    }

    validateSubmissionText(text) {
        this.elements.submissionText().contains(text);
    }
}
