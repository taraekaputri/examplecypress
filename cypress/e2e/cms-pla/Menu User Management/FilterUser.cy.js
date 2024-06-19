describe('Filter User', () => {
    it('Filter User Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    cy.get(':nth-child(7) > .q-item > .q-item__section--main > .q-item__label').click()

    cy.get('.justify-start > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').click()
    cy.get('span').contains('Username').click()
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control').type('indofund')
    


  



    
})
  
})