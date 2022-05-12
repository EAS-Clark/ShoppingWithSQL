Feature: First feature


Scenario Outline: get categories
    When I send a GET request to http://localhost:3000/api/categories
    Then I receive a status code of 200

Scenario Outline: get categories by id 
    When I send a GET request to http://localhost:3000/api/categories/1
    Then I receive a response name of sdfsdfsdf

Scenario Outline: patch categories by id 
    When I send a PATCH request to http://localhost:3000/api/categories/1  
    And I send the data of {"name": "test"}
    Then I receive a response name of "rows edited: 1"

Scenario Outline: get categories by id 
    When I send a GET request to http://localhost:3000/api/categories/1
    Then I receive a response name of test