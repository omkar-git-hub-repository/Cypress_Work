

describe('Handeling alerts window', () => {

    it('handeling alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // 1 * - click on alert window
        cy.xpath("//input[@id='alertbtn']").click();

        // 2 - *handeling confirm window


        cy.get("#confirmbtn").click();
        cy.on('window:confirm', () => false)

    })

    // 3 - Send data to prompt alert window
    it.only('send data to prompt alert window', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome')

            cy.xpath('//button[@id="promptBtn"]').click();

            cy.get('#demo').should('contain', 'welcome')
        })
        //cy.on('window:confirm', () => false)

    })
})