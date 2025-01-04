// 4 -types of hooks
// 1st   // before
// 2nd   // after
// 3rd   // beforeEach
// 4th   // afterEach

describe('hooks and tags', () => {

    before( () => {
        // this execute only once before launching the test case
        cy.visit("https://testautomationpractice.blogspot.com/")
    })

    after( () => {
        // this execute only once after completing the test case
        cy.log('After hook executed')

    })
    
    beforeEach( () => {
        // this execute before each test case or hook (it)
        cy.log('Before each hook executed')
    })

    afterEach( () => {
        // this execute after each test case or hook (it)
        cy.log('After each hook executed')
    })



    it.only('login', () => {
        cy.log('*******login**********')
    })

    it.only('product search', () => {
        cy.log('*******product  search**********')
    })

    it.only('logout', () => {
        cy.log('*******logout**********')
    })

    
})