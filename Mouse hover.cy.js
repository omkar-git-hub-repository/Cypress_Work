// for the drag n drop install the folowing cmd
// npm install --save-dev @4tw/cypress-drag-drop          // install for drag n drop   
// add required plugin for the drag n drop event
require('@4tw/cypress-drag-drop')

describe('handeling mouse ', () => {

    it('hover over a link', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click();
        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible').click()
    
    })

    it('Right click mwthod', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // there are two approaches 
       // cy.get('#mousehover').trigger('mouseover').click({button: 'right'})   //approach 1

       // cy.get('#mousehover').trigger('contextmenu')                          //approach 2

       // cy.get('#mousehover').rightclick()                                   //approach 3
    })

    it.only('double click method', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.xpath("(//input[@id='field1'])[1]").clear().type('Hello Tester')
       // cy.xpath("//button[normalize-space()='Copy Text']").dblclick()

        // another method to dblclick
        cy.xpath("//button[normalize-space()='Copy Text']").trigger('dblclick')
    
    })

    
    it('drag and drop method', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//div[@id='draggable']").drag("#droppable")
    })

    it.only('scrolling the web page', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        // scroll down till the element get into view
        cy.xpath("//h2[normalize-space()='ShadowDOM']").scrollIntoView({duration:2000})

        //to Scroll Up
        cy.get("h1[class='title']").scrollIntoView({duration:2000})
    })

})