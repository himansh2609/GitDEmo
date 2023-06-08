/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My fifth test case', function()
{
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   
   cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
   {
     const text =$el.text()
     if(text.includes('Python'))
     {
      cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
      {
       const pricetxt= price.text()
       expect(pricetxt).to.equal('25')
      })
     }

   })




  

})

})