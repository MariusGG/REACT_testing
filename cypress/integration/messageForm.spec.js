import React from 'react';
import { mount } from 'cypress-react-unit-test';
import MessageForm from '../../src/MessageForm';

describe('<NewMessageForm />', () => {
  describe('clicking the send button', () => {
    beforeEach(() => {
      mount(<MessageForm />);

      cy.get('[data-test="messageText"]')
        .type('New message');

      cy.get('[data-test="sendButton"]')
        .click();
    });

    it('clears the text field', () => {
      cy.get('[data-test="messageText"]')
        .should('have.value', '');
    });
  });
});
