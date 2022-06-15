Feature: Get age from name, country

  
  Scenario: Check if the user is authenticated or not
    When the user sends a request to dropbox with query "foo"
    Then the response code should be '200'
    Then the response body should contain the result 'foo'
