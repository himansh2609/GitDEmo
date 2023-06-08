/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My sixth test case', function()
{
   cy.visit(Cypress.env('url')+"/AutomationPractice/")
   
   //cy.get('.mouse-hover-content').invoke('show')
   cy.contains('Top').click({force:true})
   cy.url().should('include','top')

   



  

})

})