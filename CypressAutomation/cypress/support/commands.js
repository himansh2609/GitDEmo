// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
 Cypress.Commands.add('productselect',(productname)=> 
 { 
cy.get('.card-title').each(($el, index, $list) =>
{

    if($el.text().includes(productname))
    {
cy.get('button.btn.btn-info').eq(index).click()
    
    }
})
 })

Cypress.Commands.add('selectcountry',(countryname)=> 
{
    cy.get('#country').type(countryname)
    cy.wait(6000)
    cy.get('.suggestions li').contains(countryname).click()
    
})
Cypress.Commands.add('sumofproducts', (productname) => 
{ 
  var sum=0
   cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
   {
const amt=$el.text()
var res= amt.split(" ")
res= res[1].trim()
sum=Number(sum)+Number(res)
   }).then(function()
   {
cy.log(sum)
   })
cy.get('tr td:nth-child(5) h3 strong').then(function(element)
{
    const amt=element.text()
    var res= amt.split(" ")
    var total= res[1].trim()
    expect(sum).to.equal(Number(total))
})

})

 





//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })