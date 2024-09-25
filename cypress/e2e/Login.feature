@login @regression
Feature: WebDriverUniversity - Login Page

    Background: Navigate to the Login Page
        Given I navigate to the home page
        When I click on the login portal

    Scenario Outline: Validate Login Form Submission
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should see an alert containing '<alertText>'

        Examples:
            | username  | password     | alertText            |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver1   | validation failed    |