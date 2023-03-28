import {Given,When,Then} from '@wdio/cucumber-framework';

Given(/^I'm on the Home page$/, async function() {
   await browser.url("https://www.pokerstars.uk/sports/");
   await browser.maximizeWindow();
});

Then(/^I should see a logo$/, async function() {
    var logo=await $("//span[contains(text(),'odds boost')]").isDisplayed();
    console.log("isDisplayed ?"+logo);
});

Then(/^I should see a list of sports categories$/, async function() {
    for (let list = 0; list <=15; list++) {
        var item=await $("//body[1]/div[1]/div[2]/div[3]/div[1]/div[1]/nav[1]/ul[1]/li["+list+"]/a[1]/span[1]/span[1]").isDisplayed();
        console.log("isDisplayed ?"+item);
      }
});

Then(/^I should see a navigation menu$/, async function() {
    var navMenu=await $("//body/div[@id='root']/div[2]/div[3]/div[1]/div[1]/nav[1]").isDisplayed();
    console.log("isDisplayed ?"+navMenu);
});

Then(/^I should see a banner ad$/,async  function() {
    var bannerAds=await $("//body/div[@id='root']/div[2]/div[3]/div[2]/div[1]/div[1]").isDisplayed();
    console.log("isDisplayed ?"+bannerAds);
});

Then(/^I should see a promotions tab$/,async function() {
    var promotionsTab=await $("//span[contains(text(),'Promotions')]").isDisplayed();
    console.log("isDisplayed ?"+promotionsTab);
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

When(/^I click on the "Help" link in the navigation menu$/,async function() {
    const help=await browser.$("//header/div[2]/div[2]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    await help.click();
}); 

Then(/^I should be taken to a page with sports-related FAQs and support resources$/,async function() {
    var howCanWeHelp=await $("//h2[contains(text(),'Hello, how can we help?')]").isDisplayed();
    console.log("isDisplayed ?"+howCanWeHelp);
}); 

When(/^I click on the "Promotions" link in the navigation menu$/,async function() {
    const promotions=await browser.$("//span[contains(text(),'Promotions')]");
    await promotions.click();
}); 

Then(/^I should be taken to a page with current sports-related promotions$/,async function() {
    var currentPromotion=await $("//h1[contains(text(),'Promotions')]").isDisplayed();
    console.log("isDisplayed ?"+currentPromotion);
});

When(/^I click on "Settings" option$/,async function() {
    const help=await browser.$("//span[contains(text(),'Settings')]");
    await help.click();
}); 

Then(/^I should see the options for related to settings$/,async function() {
    var settigsOption=await $("//h2[contains(text(),'General')]").isDisplayed();
    console.log("isDisplayed ?"+settigsOption);
});