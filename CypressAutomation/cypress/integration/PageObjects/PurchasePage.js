class PurchasePage
{
    

    purchasebtn()
    {

        return cy.get('.ng-untouched > .btn')
    }

    checkbox()
    {
        return cy.get('.checkbox')
    }

    successmessage()
    {
        return cy.get('.alert').then(function(element)
        {
           const textmsg= element.text()
           expect(textmsg.includes("Success")).to.be.true
        })
    }
}

export default PurchasePage;