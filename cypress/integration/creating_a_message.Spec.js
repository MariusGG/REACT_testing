describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000'):

    cy.get('[data-test="messageText"]')
    .type('New message');

    cy.get('[data-test="sendButton"]')
    .click();

    cy.get('[data-tes="messageText"]')
    .should('have.value', '');

    cy.contain('New message');
  });
});
