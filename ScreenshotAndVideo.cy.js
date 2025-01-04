describe('capturing screenshot and video', () => {
    it('capture Screenshot', () => {

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
       //  cy.screenshot("Webpage SC")

        //get title of the webpage
        cy.title().should('have.text', 'Your account')

        //capture scrreenshot of a specific element

        cy.xpath("//a[normalize-space()='Qafox.com']").screenshot("Webpage Logo")
    })
})