Feature: End to  end ecommerce validation

Application regression

@regression
Scenario: Ecommerce products delivery
Given I open Ecommerce page
When I add items to cart
And Validating the total prices
Then Select the country submit and verify Thankyou 

@smoke
Scenario: Filling the form
Given I open Ecommerce page
When I fill the form  details
| name | gender |
| Himanshu | Male |
Then Validate the form behaviour
And Finally select the Shop page
