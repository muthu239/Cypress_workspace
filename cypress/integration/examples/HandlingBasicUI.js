/// <reference types= "Cypress"/>   // to get auto suggestions of methods

describe('Basic UI Functionality automation using cypress', function()
{
    it('Handling basic UI', function(){

//Checkbox and radiobutton

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    
    //Uncheck checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //Check multiple checkboxes together having same locators
        cy.get('input[type = "checkbox"]').check(['option2', 'option3'])


//Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

//Dyanmic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text() === "India"){
                cy.wrap($e1).click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'India')

//Handling visible and invisble elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

//Handling pop up alerts
        cy.get('#alertbtn').click()
        cy.get('[value ="Confirm"]').click()

        //to get the text from pop up
        cy.on('window:alert',(str)=> {

            //
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        // to get text from confirm - cancel pop up
        cy.on('window:confirm',(str)=> {

            //
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        // to click cancel on the pop up
        cy.on('window:confirm',()=> false)


    
    })
})