it('Login API response', () => {
    cy.request('POST', 'https://e-paratext-367610.el.r.appspot.com/signup', { username: 'admin',password: '12345' }).then(
        (response) => {
        expect(response.body).to.equal('User Added') // true
    })
});