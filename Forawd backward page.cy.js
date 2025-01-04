describe('mysuite', () => {
    it('NavigationTest', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home'); 
        cy.title().should('eq', 'Your Store'); // Home page

        cy.xpath("//a[normalize-space()='Cameras']").click(); 
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text', 'Cameras'); // Cameras

        cy.go('back'); // Go back to home
        cy.title().should('eq', 'Your Store'); 

        cy.go('forward'); // Cameras
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text', 'Cameras'); 

        cy.go(-1); // Home
        cy.title().should('eq', 'Your Store'); 

        cy.go(1); // Cameras
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text', 'Cameras'); 

        cy.reload(); 
        
    });
});