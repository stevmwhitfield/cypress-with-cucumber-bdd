Feature: WebDriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the home page
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type an email address
        And I type a comment
        And I click on the submit button
        Then I should see a thank you message