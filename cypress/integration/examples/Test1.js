//cypress - spec file
///<reference types= "Cypress"/>   // to get auto suggestions of methods

describe('My first test suite', function()
{
    it('My FirstTest Case', function(){

//test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);

    })

//     it('My SecondTest Case', function(){

// //test step


//     })
})