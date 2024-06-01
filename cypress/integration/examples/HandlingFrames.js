/// <reference types= "Cypress"/>   // to get auto suggestions of methods
/// <reference types = "cypress-iframe"> // to get auto suggestions of methods of iframe
import 'cypress-iframe'

describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling iframes', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        cy.wait(8000)

        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)




    })
})