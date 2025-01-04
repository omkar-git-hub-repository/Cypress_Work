describe('CSSLocators', () => {

    it('locateCSS_Path', () =>{

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.xpath("//input[@placeholder='Search']").type('mac book')

        cy.get("button[class='btn btn-default btn-lg']").click()

        // validate the correct search bby Assertion
        cy.get("div[id='content'] h1").contains('mac book')
        
    })
})