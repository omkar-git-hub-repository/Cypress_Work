// fixtures are the hardcoded data that is stored inside the fixture folder in the .json file
// we can access them directly in our test cases

describe('fixtures', () => {

    before(() => {
        // this execute only once before launching the test case
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Accessing Fixtueres data', () => {
        //Approach 1 Access the Fixtueres data using Function method

        // for that first we have to access the fixture folder file
        cy.fixture("OrangeHRM").then((fixtureData) => {
            cy.get("input[placeholder='Username']").type(fixtureData.userName)
            cy.get("input[placeholder='Password']").type(fixtureData.password)
            cy.get("button[type='submit']").click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
        })

        // approach -2  *** using 'Before' hook ***  
        // so that we don't have to add the file in each 'it' block

    })


    let fixtureData;
    before(() => {

        cy.fixture("OrangeHRM").then((userData) => {
            fixtureData = userData;
        })
    })
    it.only('Accessing Fixtueres data using Before hook', () => {
        cy.get("input[placeholder='Username']").type(fixtureData.userName)
        cy.get("input[placeholder='Password']").type(fixtureData.password)
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb >.oxd-text').should('contain', 'Dashboard')
    })


})