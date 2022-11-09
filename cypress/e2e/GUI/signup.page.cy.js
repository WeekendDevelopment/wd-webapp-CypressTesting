it('Visiting URL',() =>{
    cy.visit('https://wd-webapp-fe.el.r.appspot.com/')
    cy.get('#signupRedirect').click()
});

it('Redirects to Signup page and verifies page elements', () => {
    cy.get('#loginRedirect').should('exist')
    cy.get('#signupRedirect').should('exist')
    cy.get('[data-ref="signupUsername.container"]').should('exist')
    cy.get('[data-ref="signupEmail.container"]').should('exist')
    cy.get('[data-ref="signupPassword.container"]').should('exist')
    cy.get('[data-ref="confirmPassword.container"]').should('exist')
    cy.get('[data-ref="signupButton"]').should('exist')
}); 

it('Signup page happy path to add user', () => {
    cy.get('[data-ref="signupUsername.container"]').type('tester')
    cy.get('[data-ref="signupEmail.container"]').type('tester@gmail.com')
    cy.get('[data-ref="signupPassword.container"]').type('qwerty')
    cy.get('[data-ref="confirmPassword.container"]').type('qwerty')
    cy.get('[data-ref="signupButton"]').click()
    cy.get('p').contains('User Added')
}); 