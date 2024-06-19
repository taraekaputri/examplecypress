describe('Filter Repayment List', () => {
    it('Filter Repayment List', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()


    cy.get(':nth-child(5) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main').click()
    cy.get(':nth-child(5) > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > :nth-child(1) > .q-item').click()

    cy.get('.justify-start > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-icon').click()
    cy.get('span').contains('Company Name').click()
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control').type('TEST')


    cy.get('.justify-start > .btn-primary').click()


})
  
})