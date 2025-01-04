// cypress cant handel window opening in another tab,
// so to handel window we remove the attributr 'target' of that link
// then the tab open into the same tab instead of another window or tab

describe ('Handel Window', () => {

    it ('Handel Window in Cypress', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        // cy.xpath("//div[@class='widget-content']/button[@onclick='myFunction()'] ").invoke('removeAttr', 'target')   // this will remove the target attrbute
        // .click();

// go back to the previous page
        cy.xpath('//a[@id="apple"]').click();
        cy.wait(4000)
        cy.go('back');
    })
})