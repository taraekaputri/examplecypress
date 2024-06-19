describe('Filter Report', () => {
    it('Filter Report Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()


    cy.get('[caption="Report"] > .q-item').click()

    cy.get('.justify-start > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('2023-12-01')
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control').type('2024-01-31')
    cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control').click()
    cy.get('span').contains('Employee ID').click()
    cy.get(':nth-child(4) > .q-field > .q-field__inner > .q-field__control').type('tara')
    cy.get('.justify-start > .btn-primary').click()



})
  
})