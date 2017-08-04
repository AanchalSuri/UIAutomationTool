var myStepDefinitionsWrapper = function () {

this.Given(/^I am on the login page$/, function (callback) {

  // Write code here that turns the phrase above into concrete actions

browser.ignoreSynchronization=true; // To be added if the application is non-angular
browser.driver.manage().window().maximize(); // To maximize the window
browser.get("https://www.facebook.com").then(function(){
    callback(); // To tell the cucumber that we are done with this step
   })

});

this.When(/^I enter username$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
element(by.id("email")).sendKeys("abc@gmail.com").then(function(){
  callback();
 });
});

this.When(/^I enter password$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  element(by.id("pass")).sendKeys("*****").then(function(){
  callback();
 });
});

this.When(/^I click on login button$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions 
  element(by.id("u_0_l")).click().then(function(){
  callback();
 });
});

};
module.exports = myStepDefinitionsWrapper