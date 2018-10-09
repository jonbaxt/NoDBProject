describe('Web Functionality', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000')
    })
    
    // it()

    it('Should open input selection', function(){
        it('select.selectContainer').click();
    })

    // it('Should type into input box', function(){
    //     cy.get('input').type('takeoutthetrash')
    // })

})