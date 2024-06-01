describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling Mouse hover', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        cy.url().should('include','top')

        //if we dont want to have the hover visible and we want only to click the menu on the hover we can use force click

    })

})