Feature: Login User 

Scenario: Login User with correct email and password
    
    Given The browser is launch
    When Navigate to url 
    Then Verify that home page is visible successfully
    
    When Click on Signup button
    Then Verify Login to your account is visible

    When Enter correct email address and password
    And Click on Login button
    Then Verify that Logged in as username is visible

    When Click Delete Account button
    Then Verify that ACCOUNT DELETED! is visible


Scenario: Login User with incorrect email and password
