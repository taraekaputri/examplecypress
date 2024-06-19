describe('Create User', () => {
    it('Create User Success', () => {
      cy.viewport(1024, 768)
    cy.visit('https://cyclops-dev.ottodigital.id/cms-pla/#/login');

    cy.get("input[name='field-username']").type('cyclops')
    cy.get("input[name='field-password']").type('cyCl0p5#22')
    cy.get('#btn-login').click()

    cy.get(':nth-child(7) > .q-item > .q-item__section--main > .q-item__label').click()
    cy.wait(500)
    cy.get('.full-width > :nth-child(2) > .q-btn > .q-btn__content').click()



    cy.get('#input-user-full-name').type('NEW USER AUTOMATION')
    cy.get('#input-user-email').type('email@auto.id')
    cy.get('#input-user-username').type('username_by_auto')
    cy.get('#input-user-password').type('password')
    cy.get("label[for='input-user-role']").click()
    cy.get('span').contains('Admin Company').click()
    cy.get("label[for='input-user-type-company']").click()
    
    cy.get('span').contains('Save').click()







})
  
})