it('Login API response', () => {
    cy.request('POST', 'https://e-paratext-367610.el.r.appspot.com/login', { username: 'admin',password: 'CRrSzVlYrwbOB9qh+oLyWvKRA2v3bgXAmq+bKyO/DIlojTzhUBxPhZqIN3D/78QQ5oAv5s0vVRWbHno+MZYC32JcQGrXYlfWFf+cdkEB8UpE2vPJqcTYxqF7xMnCP1GaTCLA5IKZ2gKboEGZRknepl/qfLA8YexcwHd22zkb/W3xMGasyOUVcqvWQdbNgQMcubo1W0pCiQHVov1M1jqrWo7SNgcAmDV5kt2lUwA0v/7Ub6HhXQ//uWyRn+Z7yhC3BVD/csL8W1yRpnVNNvIqeR1waqHRtFiUZ8htoPf3eO4so4aiuGFXRSRzEWaFi47xysbaZnXeRLTdMmaXzOEa1w==' }).then(
        (response) => {
        expect(response.body).to.equal('Success')
        })
    });




 