describe('Handel Table', () => {

    it.skip('collect no of rows and clmn', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#productTable').should('be.visible')
        cy.get('#productTable>thead>tr>th').should('have.length', 4)
        cy.get('#productTable>tbody>tr').should('have.length', 5) // 5 rows with 4 columns

        //check all the checkboxes 
        cy.get('#productTable>tbody>tr>td>input').check()

        // validate the cell values
        cy.xpath("//td[normalize-space()='Laptop']").should('contain','Laptop');
        
    })

    it.only('validate cell values', () => {
        // validate the cell values
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.xpath("//td[normalize-space()='Laptop']").should('contain','Laptop');
    })
})