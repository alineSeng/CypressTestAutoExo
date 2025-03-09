Feature: Logout User 

Scenario: Logout User
    
    Given The browser is launch
    When Navigate to url 
    Then Verify that home page is visible successfully
    
    When Click on Signup and Login button
    Then Verify Login to your account is visible

    When Enter correct email address and password
    And Click on Login button
    Then Verify that Logged in as username is visible

    When Click on logout button
    Then Verify that user is navigated to the login page