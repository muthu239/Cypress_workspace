/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling Child tab', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.origin('https://www.qaclickacademy.com/',() =>{

        //All the operations on qa click academy should be inside this origin

            cy.get('#navbarSupportedContent a[href*="about.html"]').click()

            cy.get('.mt-50 h2').should('contain.text','Welcome to QAClick Academy ')
        })
        cy.stub

       

        //Outside the origin, cypress checks for the first domain

    })

//Alternate way for handling child tab
    it('Handling Child tab 2nd way', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Alternate method with removing attribute
        cy.get('#opentab').then(function(element){
            const url = element.prop('href')

            cy.visit(url)

            cy.origin(url,() =>{

            cy.get('#navbarSupportedContent a[href*="about.html"]').click()
        })

        })
    })

})