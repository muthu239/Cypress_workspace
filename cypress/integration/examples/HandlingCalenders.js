describe('UI Manipulations', function()
{
    it('Handle Calendar dates', function(){

        const dateNo = '26'
        const monthNo = "5"
        const year = "2027"

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__tile.react-calendar__year-view__months__month').eq(Number(monthNo)-1).click()

        var monthAndYearText = "a"

        cy.contains(year).then(($value) =>{
            monthAndYearText = $value.text()
            cy.log(monthAndYearText)

            var startInd = ''
                var endInd = ''
                var i = 0
            cy.get('.react-calendar__tile.react-calendar__month-view__days__day').find('abbr[aria-label]').each(($e1, index, $list) => {
           
                const dateText = $e1.text()
    
                // cy.log(dateText)

                

                if(dateText === '1'){
                    startInd = index
                    i = i+1
                }

                if(i = 2){
                    endInd = index-1
                }
    
            })
            cy.log(startInd)
            cy.log(endInd)

        })
        
        




        

        
        // // cy.contains('abbr',dateNo).click()
        // cy.get('abbr[aria-label*='+dateNo+' '+year+']').click()
        
        // cy.get('.react-calendar__month-view__days > :nth-child(9)')




    })
})