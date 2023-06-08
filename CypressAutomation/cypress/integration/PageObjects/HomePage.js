class HomePage
{
  getEditbox()
  {
    return cy.get('input[name="name"]:nth-child(2)')
  }

  selectGender()
  {
return cy.get('select')
  }
 twowaybindingeditbox()
 {

   return cy.get('input[name="name"]:nth-child(1)')
 }
getEnterprenuerradiobutton()
{
   return cy.get('#inlineRadio3')
}
submitform()
{
  return  cy.get(':nth-child(2) > .nav-link')
}

}
export default HomePage;