describe('Create Company', () => {
  it('Create Company Success', () => {
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    
    cy.get('.q-gutter-sm > .btn-primary').click()
    cy.get('#field-company-name').type('PT. TESTING AUTOMATION 3')
    cy.get('#field-company-code').type('AUTOOOO9Z')
    cy.get('#field-company-npwp').type('33.637.272.8-262.933')
    cy.get('#field-company-industry').click()
    cy.get('div#field-company-industry').click()
    cy.get('span').contains('KEUANGAN').click()
    cy.get('#field-company-address').type('Jalan Soepomo Tebet Jakarta Selatan')
    cy.get('#field-business-city').type('JAKARTA SELATAN')
    cy.get('[aria-label="Active"]').click()
    cy.get('#field-company-phone').type('081245678900')
    cy.get(':nth-child(3) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get('#field-hr-name').type('TARA EKA TEST')
    cy.get('#field-hr-phone').type('08786152189')
    cy.get('#field-hr-email').type('tara@otto.id')
    cy.get('#field-finance-name').type('TARA EKA FINANCE')
    cy.get('#field-finance-phone').type('08798177922')
    cy.get('#field-finance-email').type('tara@ottofinance.id')
    cy.get(':nth-child(5) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get(':nth-child(2) > .input > .q-field > .q-field__inner > .q-field__control').type('10000000')
    cy.get(':nth-child(3) > .input > .q-field > .q-field__inner > .q-field__control').type('10000000')
    cy.get(':nth-child(4) > .input > .q-field > .q-field__inner > .q-field__control').type('10000000')
    cy.get(':nth-child(5) > .input > .q-field > .q-field__inner > .q-field__control').type('10000000')
    cy.get(':nth-child(6) > .input > .q-field > .q-field__inner > .q-field__control').type('10000000')
    cy.get(':nth-child(7) > .q-expansion-item__container > .q-item > .q-item__section--main > .expan-title').click()
    cy.get('#field-salary-date').type(25)
    cy.get('#field-cut-off').type(20)
    cy.get('#field-start-disburse').type(1)
    cy.get('#field-end-disburse').type(20)
    cy.get('#field-minimum-amount').type(20000)
    cy.get('#field-maximum-amount').type(30000000)
    cy.get('.q-expansion-item--expanded > .q-expansion-item__container > .q-expansion-item__content > .q-card > .q-card__section > :nth-child(7) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.get('span').contains('INDO FUND').click()
    cy.get('.q-checkbox__inner').click()
    cy.get(':nth-child(9) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.get('span').contains('OTTO').click()
    cy.get('#field-iaps-fee').type(15000)
    cy.get('#field-lender-fee').type(15000)
    cy.get('#field-multiple-fee').type(500000)
    cy.get('#field-overdue-date').type(30)
    cy.get('#btn-submit > .q-btn__content').click()
    cy.get('.col-12').should('be.visible')
     




    

    


    
  









  })
  
})