describe('Assertion demo', () => {
    it('Implicit Assertion', () => {

        // Implicit assertion have only two methods 1. 'should' && 2. 'and' 
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

        //cy.url().should('include','tutorialsninja')
        //  cy.url().should('eq','https://tutorialsninja.com/demo/index.php?route=common/home')
        // cy.url().should('contain','ninja')

        // OR we can use in once
        cy.url().should('include', 'tutorialsninja')
            .should('eq', 'https://tutorialsninja.com/demo/index.php?route=common/home')
            .should('contain', 'ninja')

        //OR using  'and'
        cy.url().should('include', 'tutorialsninja')
            .and('eq', 'https://tutorialsninja.com/demo/index.php?route=common/home')
            .and('contain', 'ninja')



        // now validate particular element is displayed or not
        cy.get('h1 > a').should('be.visible')
        cy.get('h1 > a').should('exist')

        //check no of links present in the webpage
        cy.get('a').should('have.length', 73)

        cy.get(':nth-child(4) > .product-thumb > .caption > h4 > a').should('exist')


    })

    //Login validation
    it('validate login', () => {

        // go to login page
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get('.dropdown > .dropdown-toggle > .fa').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()

        cy.get('#input-email').type('pavanoltraining12345@gmail.com')
        // cy.get('#input-email').should('have.value','pavanol12345')
        cy.get('#input-password').type('admin123')
        cy.get('form > .btn').click()

        //validate account login or not  
        cy.title().should('contain', 'Account')
    })


    // visit cypress assertion page there are so many methods 

    // Explicit Assertion 
    it('Explicit Assertion', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

        // in this method first capture the element and then then do multiple validation on it
        let expProdName = 'MacBook'
        cy.xpath("(//a[normalize-space()='MacBook'])[1]").then((x) => {
            let ActProdName = x.text()

            //BDD Style
            expect(ActProdName).to.equal('MacBook')
            expect(ActProdName).to.not.equal('MacBookAir')

            //TDD style
            assert.equal(ActProdName, expProdName)
            assert.notEqual(ActProdName, 'MacBookAir')

        })
    })
})