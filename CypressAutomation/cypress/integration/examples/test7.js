/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My seventh test case', function()
{
   cy.visit(Cypress.env('url')+"/AutomationPractice/")
   
   cy.get('#opentab').then(function(e1)
   {
const url=e1.prop('href')
cy.visit(url)

cy.get('div.sub-menu-bar a[href="about.html"]').click()


   })
   


  
   
  

   



  

})

})