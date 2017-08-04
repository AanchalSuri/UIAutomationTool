Feature: Testing Application
	Scenario: Testing Login
		Given I am on the login page
		When I enter username
		And I enter password
		And I click on login button
		Then I should see Homepage