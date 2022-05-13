Feature: First feature


Scenario Outline: get categories
    When I send a GET request to http://localhost:3000/api/categories
    Then I receive a status code of 200

Scenario Outline: get categories by id 
    When I send a GET request to http://localhost:3000/api/categories/1
    Then I receive a response name of test

Scenario Outline: modify contact
    When I send PATCH request with a {"name": "test"} to http://localhost:3000/api/categories/1
    Then I get response code 200

Scenario Outline: uploading contact
    When I send POST request with a {"name": "test"} to http://localhost:3000/api/categories/1
    Then I get response code 200


