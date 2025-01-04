
describe('my first Test', () => {
    it('Test1 Verify Title', () => {

        //testcase 
        cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
        cy.title().should('eq','Your Store')
    })  
    
})