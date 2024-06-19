describe('Edit Company', () => {
    it('Edit Company Success', () => {
      cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');
  
      cy.get("input[name='field-username']").type('cyclops')
      cy.get("input[name='field-password']").type('cyCl0p5#22')
      cy.get('#btn-login').click()


      cy.get(':nth-child(2) > :nth-child(2) > .doc-link').click()
      cy.get('.q-pb-sm > .q-btn > .q-btn__content > .block').click()
      cy.get('#field-company-npwp').clear()
      cy.get('#field-company-npwp').type('111122223333444')
      cy.get('#field-company-address').clear()
      cy.get('#field-company-address').type('Jalan Alamat edited by automation')
      cy.get(':nth-child(5) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-address').clear()
      cy.get(':nth-child(5) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-address').type('JAKARTA UTARA')

      cy.get('#btn-submit > .q-btn__content').click()












    })
  
})