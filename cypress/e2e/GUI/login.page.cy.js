    it('Visiting URL',() =>{
        cy.visit('https://wd-webapp-fe.el.r.appspot.com/')
    });

    it('Login Page elements should be visible', () => {
        cy.get('#loginRedirect').should('exist')
        cy.get('#signupRedirect').should('exist')        
        cy.get('[data-ref="loginUsername.container"]').should('exist')
        cy.get('[data-ref="loginPassword.container"]').should('exist')
        cy.get('[data-ref="loginButton"]').should('exist')
        });

    it('Login Page happy path to next screen', () => {
        cy.get('[data-ref="loginUsername.container"]').type('admin')
        cy.get('[data-ref="loginPassword.container"]').type('12345')
        cy.get('[data-ref="loginButton"]').click()
        cy.get('p').contains('Success')
    });        
    
    

