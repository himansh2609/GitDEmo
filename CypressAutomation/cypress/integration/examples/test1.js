/// <reference types="Cypress" />

describe('My first test suite',function() 
{
it('My first test case', function()
{
cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click()
cy.get('.products').find('.product').each(($el, index, $list) =>
{
const text=$el.find('h4.product-name').text()
if(text.includes('Cashews'))
{
   cy.wrap($el).find('button').click()

}
cy.get('.brand').should('have.text','GREENKART')
cy.get('.brand').then(function(logo)
{
    cy.log(logo.text())
})





})

})


})