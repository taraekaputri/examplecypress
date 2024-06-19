describe('Create Employee Single', () => {
    it('Create Employee Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    cy.get(':nth-child(3) > .q-expansion-item > .q-expansion-item__container > div.q-item').click()
    cy.get(':nth-child(3) > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > :nth-child(1) > .q-item').click()
    cy.get(':nth-child(2) > .q-btn--flat').click()
    cy.get(':nth-child(2) > .q-item__section').click()
    cy.get('.col-md-6 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.get('span').contains('PLAAUTO8').click()
    cy.get(':nth-child(3) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('NAMA KARYAWAN')
    cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-npwp').type('08764131689')
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(4) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-npwp').type('email@emalemail.co')
    cy.get(':nth-child(5) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-npwp').type('IDZ79792')
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.get('span').contains('Manajer').click()
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(4) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-npwp').type('10 Des 2020')
    cy.get('.q-option-group > :nth-child(1) > .q-radio > .q-radio__inner').click()
    cy.get(':nth-child(7) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > .col-6 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > #field-company-npwp').type('10000000')
    cy.get('.q-checkbox').click()
    cy.get('[aria-label="Active"] > .q-radio__inner').click()
    cy.get('#btn-submit > .q-btn__content > .block').click()
    cy.get('.col-12').should('be.visible')
   
  })
  
})
      