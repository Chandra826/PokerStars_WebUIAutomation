# PokerStars_WebUIAutomation

The aim of this project is to automate the testing of a Pokerstars web user interface using WebdriverIO, Gherkin, and JavaScript. The project will involve the following steps:
 
Setup: Set up the test environment by installing the necessary tools and dependencies, such as Node.js, WebdriverIO, Gherkin, and any required plugins or frameworks.

Test Scenarios: Define the test scenarios using Gherkin syntax, which is a business-readable language that allows for collaboration between developers, testers, and other stakeholders. The scenarios should cover all the critical features and functionality of the web application.

Test Implementation: Implement the test scenarios using WebdriverIO and JavaScript. WebdriverIO is a powerful automation framework that provides a rich set of APIs for interacting with the web application, while JavaScript is a popular programming language that is easy to learn and use.

Test Execution: Execute the tests using a test runner such as Mocha or Jasmine. The test runner will execute the tests and provide detailed reports on the test results, including any failures or errors.

Test Maintenance: Maintain the tests by updating them as the web application changes, and by adding new tests to cover additional features and functionality.

# Run this command from terminal to run the project,

./node_modules/.bin/wdio wdio.conf.js

# Scenarios Automated
# Scenario 1: Verify Home Page Layout

import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

Then(/^I should see a logo$/, async function() {
    var logo=await $("//span[contains(text(),'odds boost')]").isDisplayed();
    console.log("isDisplayed ?"+logo);
});

Then(/^I should see a navigation menu$/, async function() {
    var navMenu=await $("//body/div[@id='root']/div[2]/div[3]/div[1]/div[1]/nav[1]").isDisplayed();
    console.log("isDisplayed ?"+navMenu);
});

Then(/^I should see a banner ad$/,async  function() {
    var bannerAds=await $("//body/div[@id='root']/div[2]/div[3]/div[2]/div[1]/div[1]").isDisplayed();
    console.log("isDisplayed ?"+bannerAds);
});

* Given I am on the home page
* Then I should see a logo
* And I should see a navigation menu
* And I should see a banner ad

# Scenario 2: Verify Navigation Menu

import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

Then(/^I should be able to click on each category to view related sports$/,async function() {
    if(await $("//*[@id='onetrust-accept-btn-handler']").isDisplayed){
        const acceptLink = await browser.$("//*[@id='onetrust-accept-btn-handler']")
        await acceptLink.click();
    }
    const footballLink = await browser.$("//body[1]/div[1]/div[2]/div[3]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]/span[1]/span[1]")
    await footballLink.click();
    var expectedElement=await $("//h1[contains(text(),'Football')]").isDisplayed();
    console.log("isDisplayed ?"+expectedElement);
});

* Given I am on the home page
* Then I should see a list of sports categories

# Scenario 3: View Settings

import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

When(/^I click on "Settings" option$/,async function() {
    const help=await browser.$("//span[contains(text(),'Settings')]");
    await help.click();
}); 

Then(/^I should see the options for related to settings$/,async function() {
    var currentPromotion=await $("//h2[contains(text(),'General')]").isDisplayed();
    console.log("isDisplayed ?"+currentPromotion);
});

* Given I am on the home page
* When I click on "Settings" option
* Then I should see the options for related to settings

# Scenario 9: View Promotions

import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

When(/^I click on the "Promotions" link in the navigation menu$/,async function() {
    const promotions=await browser.$("//span[contains(text(),'Promotions')]");
    await promotions.click();
}); 

Then(/^I should be taken to a page with current sports-related promotions$/,async function() {
    var currentPromotion=await $("//h1[contains(text(),'Promotions')]").isDisplayed();
    console.log("isDisplayed ?"+currentPromotion);
});

* Given I am on the home page
* When I click on the "Promotions" link in the navigation menu
* Then I should be taken to a page with current sports-related promotions

# Scenario 10: View Help and Support

import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

When(/^I click on the "Help" link in the navigation menu$/,async function() {
    const help=await browser.$("//header/div[2]/div[2]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    await help.click();
}); 

Then(/^I should be taken to a page with sports-related FAQs and support resources$/,async function() {
    var howCanWeHelp=await $("//h2[contains(text(),'Hello, how can we help?')]").isDisplayed();
    console.log("isDisplayed ?"+howCanWeHelp);
});

* Given I am on the home page
* When I click on the "Help and Support" link in the navigation menu
* Then I should be taken to a page with sports-related FAQs and support resources.



