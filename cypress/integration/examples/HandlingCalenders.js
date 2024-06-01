describe('UI Manipulations', function()
{
    it('Handle Calendar dates', function(){

        const dateNo = '6'
        const monthNo = "5"
        const year = "2027"

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__tile.react-calendar__year-view__months__month').eq(Number(monthNo)-1).click()
        cy.wait(3000)
        





    })
})