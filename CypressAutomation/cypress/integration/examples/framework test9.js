/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage"
import ProductsPage from "../PageObjects/ProductsPage"
import CheckoutPage from "../PageObjects/CheckoutPage"
import PurchasePage from "../PageObjects/PurchasePage"




describe('frame test',function() 
{

   before(function()  {
      cy.fixture('example').then(function(data)
      {
      this.data=data
      })
    })
it('My framework test case', function()
{
 const homepage=  new HomePage();
 const productspage=  new ProductsPage();
 const checkoutpage= new CheckoutPage();
 const purchasepage= new PurchasePage();

   cy.visit(Cypress.env('url')+"/angularpractice/")
   homepage.getEditbox().type(this.data.name)
 homepage.selectGender().select(this.data.gender)

  homepage.twowaybindingeditbox().should('have.value',this.data.name)
  homepage.getEditbox().should('have.attr','minlength','2')
  homepage.getEnterprenuerradiobutton().should('be.disabled')
 homepage.submitform().click()
  this.data.productname.forEach(function(element)
  {
   cy.productselect(element)

  })
  
  productspage.checkout().click()
 
  
  cy.sumofproducts(this.data.productname)
  
  checkoutpage.checkoutbtn().click()
  cy.selectcountry(this.data.countryname)
  purchasepage.checkbox().click()
  purchasepage.purchasebtn().click()
  purchasepage.successmessage()
  
   
  
  

  








   


  
   
  

   



  

})

})