import HomePage from "../pageObjects/homePage";
import productPage from "../pageObjects/productPage";
import checkoutPage from "../pageObjects/checkOutPage";

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

        Cypress.config('defaultCommandTimeout',8000)    //this timeout will be applicable only in this it{} block

        const HomePageobj = new HomePage()
        const productPageObj = new productPage()
        const checkoutObj = new checkoutPage()

        //to call an environment variable from cypress.config.js
        //Cypress.env('url')

        cy.visit(Cypress.env('url')+'/angularpractice/')

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

   var sum  = 0

cy.get('tr td:nth-child(4) strong').each((element,index,list) =>{

    cy.log(element.text())
    var no = element.text().split(" ")
    var num = Number(no[1].trim())
    sum = Number(sum)+Number(num)
}).then(function(){     //we have resolve promise here, since JS is asynchronous, it'll print cy.log(sum) before the loop execution is completed
    cy.log(sum)         // to resolve that we need to resolve the promise and ask JS to execute cy.log(sum) only after loop execution
})
 
cy.get('h3 strong').then(function(element){
var strRes = element.text().split(" ")
var res = strRes[1].trim()
expect(Number(res)).to.equal(sum)

})

   checkoutObj.getcheckoutButton().click()

   
   cy.get('#country').type('India')

   cy.get('.suggestions > ul > li > a').click()

//    cy.get('.checkbox').click()
   cy.get('#checkbox2').click({force:true}) //force clicking invisble element
   cy.get('input[type="submit"]').click()

   //    cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")

   cy.get('.alert').should('include.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")

})



})