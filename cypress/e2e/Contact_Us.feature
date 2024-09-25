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

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the home page
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should see an error message

    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate to the home page
        When I click on the contact us button
        And I type a specific first name "Sarah"
        And I type a specific last name "Williams"
        And I type a specific email address "sarah.williams@example.com"
        And I type a specific word "Hello!" and number 123 in the comment field
        And I click on the submit button
        Then I should see a thank you message

    Scenario Outline: Validate Contact Us Page
        Given I navigate to the home page
        When I click on the contact us button
        And I type a first name "<firstName>" and a last name "<lastName>"
        And I type an email address "<email>" and a comment "<comment>"
        And I click on the submit button
        Then I should see a "<message>" message

        Examples:
            | firstName | lastName | email                      | comment                        | message                      |
            | Alex      | Smith    | alex.smith@example.com     | Hello, this is a test message. | Thank You for your Message!  |
            | Sarah     | Williams | sarah.williams@example.com | Hello! 123                     | Thank You for your Message!  |
            | Bob       | Woods    | bob.woods                  | Test                           | Error: Invalid email address |