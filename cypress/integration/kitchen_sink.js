describe('Kitchen sink website', function(){
    it('visits the correct site', function(){
        cy.visit('https://example.cypress.io/')
    })
    it('finds the link type and clicks on it', function(){ 
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions')
    })
    it('should type into input box', function(){
        cy.get('#couponCode1').type('Hello Everyone')
        cy.get('.action-form').submit()
        .next().should('contain', 'Your form has been submitted!')
    })

})