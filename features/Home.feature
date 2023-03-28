Feature: Verify options on Home page

    Background:
        Given I'm on the Home page

    Scenario: Verify Home Page Layout
        Then I should see a logo
        Then I should see a navigation menu
        Then I should see a banner ad
        Then I should see a promotions tab

    Scenario: Verify Navigation Menu
        Then I should see a list of sports categories
        Then I should be able to click on each category to view related sports

    Scenario: View Promotions
        When I click on the "Promotions" link in the navigation menu
        Then I should be taken to a page with current sports-related promotions

    Scenario: View Settings
        When I click on "Settings" option
        Then I should see the options for related to settings

    Scenario: View Help and Support
        When I click on the "Help" link in the navigation menu
        Then I should be taken to a page with sports-related FAQs and support resources

        


