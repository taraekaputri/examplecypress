describe('Create Employee Single', () => {
    it('Create Employee Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    cy.get(':nth-child(3) > .q-expansion-item > .q-expansion-item__container > div.q-item').click()
    cy.get(':nth-child(3) > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > :nth-child(1) > .q-item').click()

    cy.get(':nth-child(3) > :nth-child(2) > .doc-link').click()
    cy.get('.q-pb-sm > .q-btn > .q-btn__content > .block').click()


})
  
})