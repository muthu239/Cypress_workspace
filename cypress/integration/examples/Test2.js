/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('My first test suite', function()
{
    it('My SecondTest Case', function(){

//test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    // cy.get('.product:visible').should('have.length',4);

    //Aliasing
    cy.get('.products').as('productLocator')  //used for reusing the locator.

    //parent child chaining
    cy.get('.products').find('.product').should('have.length',4);

    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();  //alias locator is used here

    cy.get('.products').find('.product').each(($e1, index, $list) => {
        const textVeg = $e1.find('h4.product-name').text()
       
        cy.log(textVeg)

        if(textVeg.includes('Cashews')){
           cy.wrap($e1).contains('ADD TO CART').click()
        }
    
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()


    // //assert if logo text is displayed correctly
    // cy.get('.brand').should('have.text','GREENKART')

    // cy.get('.brand').then(function(logoelement){

    //     cy.log(logoelement.text())


    // })

})


})