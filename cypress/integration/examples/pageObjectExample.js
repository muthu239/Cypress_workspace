import HomePage from "../pageObjects/homePage";
import productPage from "../pageObjects/productPage";

/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Using the objects created in Page object Model', function()
{

    before(function(){
        //runs once before all tests in the block
        cy.fixture("example").then(function(data){ 
           //this keyword is used to assign the argument to the variable which has global scope and access all over the class
            this.data = data
        })

    })

    it('Page Object Model', function(){

        const HomePageobj = new HomePage()
        const productPageObj = new productPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        HomePageobj.getEditBox().type(this.data.name)
        HomePageobj.getGender().select(this.data.gender)

        //Assert the text 
        HomePageobj.getTwoWayDataBinding().should('have.value',this.data.name)

        //Assert the typing length of a field box
        //Assert the value of an attribute
        HomePageobj.getEditBox().should('have.attr','minlength','2')

        //Assert if an element is disabled
        HomePageobj.getEnterpreneur().should('be.disabled')

        HomePageobj.getShopTab().click()

//Creating a custom command function in support -> command.js file and using it in the below line
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Samsung Note 8')
        
//Parametrize test with multiple data sets i.e) iterating through the array in json // for each loop is used
    this.data.products.forEach(element => {
        cy.selectProduct(element)
    })


//Click on checkout button
   productPageObj.getCheckout().click()


})



})