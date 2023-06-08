/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My second test case', function()
{
cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productnames')
cy.get('@productnames').find('.product').each(($el, index, $list) =>
{
const text=$el.find('h4.product-name').text()
if(text.includes('Cashews'))
{
   cy.wrap($el).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

})

})