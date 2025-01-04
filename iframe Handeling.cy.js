import 'cypress-iframe'

describe('Handeling Iframes', () => {


    //1st approach to handel iframe
    it.skip(' handel Ifame', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        const iframe = cy.get("#courses-iframe") // Select the iframe element using its ID
            .its("0.contentDocument.body") // Access the iframe's body
            .should("be.visible") // Assert that the iframe content is visible
            .then(cy.wrap); // Wrap the body for further Cypress commands

        //iframe.clear().type("Welcome {cmd+a}"); // Clear the content of the iframe and type new text

        cy.xpath("//a[normalize-space()='Login']").click(); // check Iframe logo is visible or not
    })

    // another approach using command 
    it.skip('handel Ifame using Command', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.getIframe('#courses-iframe')

        cy.xpath("//a[normalize-space()='Login']").click();
    
    })

    // another approach using cypree iframe plugin
    it.only('handel Ifame using cypree iframe plugin', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');  // load the iframe
        cy.iframe('#courses-iframe')

        cy.xpath("//div[@class='nav-outer clearfix']//a[normalize-space()='Blog']").click();
    
    })


})