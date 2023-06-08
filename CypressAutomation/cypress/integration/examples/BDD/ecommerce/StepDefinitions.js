import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../PageObjects/HomePage";
import ProductsPage from "../../../PageObjects/ProductsPage";
import CheckoutPage from "../../../PageObjects/CheckoutPage";
import PurchasePage from "../../../PageObjects/PurchasePage";
 const homepage= new HomePage()
 const productspage= new ProductsPage()
 const checkoutpage= new CheckoutPage()
 const purchasepage= new PurchasePage()
 
 

Given('I open Ecommerce page', function()
{
    cy.visit(Cypress.env('url')+"/angularpractice/")

})
When('I add items to cart',function()
{

    homepage.submitform().click()
  this.data.productname.forEach(function(element)
  {
   cy.productselect(element)

  })
  
  productspage.checkout().click()
})

When ('Validating the total prices',function()
{
    cy.sumofproducts(this.data.productname)

})

Then('Select the country submit and verify Thankyou',function()
{
    
    checkoutpage.checkoutbtn().click()
    cy.selectcountry(this.data.countryname)
    purchasepage.checkbox().click()
    purchasepage.purchasebtn().click()
    purchasepage.successmessage()    

})

When('I fill the form  details',function(DataTable)
{   
     name = DataTable.rawTable[1][0]
    homepage.getEditbox().type(DataTable.rawTable[1][0])
    homepage.selectGender().select(DataTable.rawTable[1][1])


})

Then('Validate the form behaviour',function()
{
    
    homepage.twowaybindingeditbox().should('have.value',name)
    homepage.getEditbox().should('have.attr','minlength','2')
    homepage.getEnterprenuerradiobutton().should('be.disabled')
})

Then('Finally select the Shop page',function()
{
  
    homepage.submitform().click()

})