describe('Handeling Checkboxex,dropdown', () => {

    it.only('handel radio Buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[for="radio2"] > .radioButton').check()
        .should('be.checked')
        cy.xpath("//label[normalize-space()='Radio3']").should('not.be.checked')
        
    })

    it.only('handeling checkboxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').should('be.visible').check()

        // Uncheck the checkbox option
        cy.get('#checkBoxOption2').check().uncheck()
        cy.get('#checkBoxOption3').check()

    })

    it.only('handeling Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#dropdown-class-example').select('option1')
       .should('have.value','option1')


       // handel dynamic dropdown
       cy.get('input#autocomplete').type('Iran').type('{enter}')
    })

})