describe('Filter Company', () => {
    it('Filter Company Success', () => {
      cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');
  
      cy.get("input[name='field-username']").type('cyclops')
      cy.get("input[name='field-password']").type('cyCl0p5#22')
      cy.get('#btn-login').click()


      cy.get('.justify-start > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()
      cy.get('span').contains('Company Code').click()
      cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control').type('PLAAUTO')
      cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()
      cy.get('span').contains('Active').click()
      cy.get('.justify-start > .btn-primary').click()
      cy.get(':nth-child(1) > [style="width: 20%;"]').contains('PLAAUTO')





      
  })
  
})