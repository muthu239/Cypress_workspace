describe('UI Manipulations', function()
{
    it('Handle Calendar dates', function(){

        const dateNo = "9"
        const monthNo = "5"
        const year = "2027"
        const expectedList = [monthNo,dateNo,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__tile.react-calendar__year-view__months__month').eq(Number(monthNo)-1).click()


     

        cy.contains(year).then(($value) =>{
            var monthAndYearText = $value.text()
            cy.log(monthAndYearText)

        
           // cy.get('.react-calendar__tile.react-calendar__month-view__days__day abbr[aria-label="'+dateNo+" "+monthAndYearText+'"]').click()

            
                var i = 0
            cy.get('.react-calendar__tile.react-calendar__month-view__days__day').find('abbr[aria-label]').each(($e1, index, $list) => {
           
                const dateText = Number($e1.text())

                if(Number(dateText) === Number(dateNo)){
                
                    cy.get('.react-calendar__tile.react-calendar__month-view__days__day').eq(Number(index)).click()
                }
            })
           
            

        })


        
  //Asserion
  cy.get('.react-date-picker__inputGroup__input').each(($element,index) => {

    cy.wrap($element).invoke('val').should('eq',expectedList[index])

  })




    })
})