/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Hooks Basics, Custom command', function()
{

    before(function(){
        //runs once before all tests in the block
        cy.fixture("example").then(function(data){ 
           //this keyword is used to assign the argument to the variable which has global scope and access all over the class
            this.data = data
        })

    })

    it('Framework Basics', function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Assert the text 
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)

        //Assert the typing length of a field box
        //Assert the value of an attribute
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')

        //Assert if an element is disabled
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()

//Creating a custom command function in support -> command.js file and using it in the below line
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Samsung Note 8')
        
//Parametrize test with multiple data sets i.e) iterating through the array in json // for each loop is used
    this.data.products.forEach(element => {
        cy.selectProduct(element)
    })


})



})