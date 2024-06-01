/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling Webtable', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


//traversing through the webtable
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

        const text = $e1.text()

        if(text.includes('Python')){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                const priceText = price.text()
                expect(priceText).to.equal('25')


            })
        }
       

    })

    })

})