Feature: DemoBlaze Validation
    Feature Description
        This feature validates the functionality of the DemoBlaze website.

    Scenario: DemoBlaze Validation
        Given I am on the DemoBlaze website
        When I click on the Sign Up button
        Then I should see a sign-up form and enter "<username>" and "<password>"
        When I login with "<username>" and "<password>"
        Then I should see a welcome message with my username "<username>"
        When I click on the "<category>" button
        When I select a "<product>" from the list
        Then I should be taken to the laptop's details page with details "<product>" and price "<product_price>"
        When I click on the Add to cart button
        Then I should see a confirmation that the "<product>" has been added to my cart
        When I enter my billing information
        Then I should see a confirmation message that my order has been placed
        When I click on the Logout button
        Then I should be logged out of my account




         Examples:
        | username      | password | category | product           | product_price |
        |hussienco2    | Hu123456 | Phones   | Samsung galaxy s6 | 360           |
        |hussco2       | Hu123456 | Phones   | Iphone 6 32gb     | 790           |
        |hussinAli4    | Hu123456 | Laptops  | MacBook Pro       | 1100          |