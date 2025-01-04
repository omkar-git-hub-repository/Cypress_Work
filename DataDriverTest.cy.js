describe('Data Driver Test', () => {

    it('login data ', () => {

        //First load the fixture file into the function
        cy.fixture("LoginData").then((logindata) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            // use the data into  loop for multiple times
            logindata.forEach((userData) => {

                cy.get("input[placeholder='Username']").type(userData.userName)
                cy.get("input[placeholder='Password']").type(userData.password)
                cy.get("button[type='submit']").click();
                if (userData.userName == "Admin" && userData.password == "admin123") {

                    cy.get('.oxd-topbar-header-breadcrumb >.oxd-text').should('have.text', userData.expected)
                    cy.wait(5000)
                    //Do logout 
                    cy.get(".oxd-userdropdown-tab").click();
                    cy.xpath("//a[normalize-space()='Logout']").click();

                    cy.wait(3000)

                    //validate logout status
                    cy.xpath("//h5[normalize-space()='Login']").should('be.visible'); 

                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userData.expected)
                }
            })
        })
    });
})