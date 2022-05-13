Feature: testing categories api


Scenario Outline: get all request 
    When I send a GET request to http://localhost:3000/api/items
    Then I receive a status code of 200


Scenario Outline: get request by id retrun name
    When I send a GET request to http://localhost:3000/api/items/1
    Then I receive a response name of bread

Scenario Outline: modify contact
    When I send PATCH request with a {"name": "test"} to http://localhost:3000/api/items/1
    Then I receive a status code of 200

Scenario Outline: uploading contact
    When I send POST request with a {"name": "test"} to http://localhost:3000/api/items
    Then I receive a status code of 200

Scenario Outline: get delete by id 
    When I send a DELETE request to http://localhost:3000/api/items/12
    Then I receive a status code of 200
