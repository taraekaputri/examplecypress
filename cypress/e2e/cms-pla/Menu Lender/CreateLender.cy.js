describe('Create Lender', () => {
    it('Create Lender Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    cy.get(':nth-child(4) > .q-item').click()
    cy.wait(500)
    cy.get('.full-width > :nth-child(2) > .q-btn > .q-btn__content').click()
    
    cy.get('#input-lender-name').type('LENDER AUTOMATION')
    cy.get('#input-lender-code').type('AUTOLENDER')
    cy.get('div.q-checkbox__label').contains('PAY LATER').click()
    cy.get('div.q-radio__label').contains('Active').click()
    cy.get('span').contains('Save').click()   


   

  })
  
})
      