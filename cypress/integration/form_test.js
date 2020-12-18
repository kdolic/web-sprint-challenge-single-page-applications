/* global cy */

describe('Lambda Eats Pizza Order App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })


    const firstNameInput = () => cy.get('form input[name="fname"]')
    const lastNameInput = () => cy.get('form input[name="lname"]')

    it('Name Input Working', () => {
        firstNameInput()
        .should('have.value', '')
        .type('Kenan')
        .should('have.value', 'Kenan')

    lastNameInput()
        .should('have.value', '')
        .type('Dolic')
        .should('have.value', 'Dolic')
    })

    it()

})