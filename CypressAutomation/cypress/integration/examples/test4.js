/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My fourth test case', function()
{
   cy.visit(Cypress.env('url')+"/AutomationPractice/")
   cy.get('#alertbtn').click()
   cy.on('window:alert', (str) =>
    {
expect(str).to.equal('Hello , share this practice page and share your knowledge')
  
    })

    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (str) => 
    { 

      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    cy.get('#opentab').invoke('removeAttr','target').click()
    
    cy.url().should('include','qaclickacademy')

    cy.go('back')





  

})

})