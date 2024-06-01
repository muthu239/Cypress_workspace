/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling Child window', function(){

    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //Handling child window
        cy.get('#opentab').then(function(element){
            const url = element.prop('href')

            cy.visit(url)

            cy.origin(url,() =>{

            cy.get('#navbarSupportedContent a[href*="about.html"]').click()
        })

        })

    })

})