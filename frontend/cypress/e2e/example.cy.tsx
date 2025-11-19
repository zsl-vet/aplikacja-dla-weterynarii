describe('example cypress tests', () => {
    it('example test', ()=>{
        cy.visit("/");
        cy.contains('aplikacja dla weterynarii').should('be.visible');
    })
})