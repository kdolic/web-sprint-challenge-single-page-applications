/* global cy */

describe('Lambda Eats Pizza Order App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })


    const firstNameInput = () => cy.get('form input[name="fname"]')
    const lastNameInput = () => cy.get('form input[name="lname"]')
    const emailInput = () => cy.get('form input[name="email"]')
    const sizeInput = () => cy.get('select[value="Small(12")]')
    const toppingCheck = () => cy.get('form input[type="checkbox"]')
    const submitButton = () => cy.get('button[id="submitButton"]')
 

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

    it('Select Multiple Toppings', () => {
        toppingCheck().should('not.be.checked')
        toppingCheck().check().should('be.checked')
    })

    it('All MVP Tests', () => {
        firstNameInput()
        .type('Kenan')
        

        lastNameInput()
        .type('Dolic')
    
        emailInput()
        .type('kdolic@gmail.com')
        
        toppingCheck().should('not.be.checked')
        toppingCheck().check().should('be.checked')

        submitButton().click()
    })

})