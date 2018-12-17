import React from 'react';
import { mount } from 'cypress-react-unit-test';
import MessageForm from '../../src/MessageForm';

describe('<MessageForm />', () => {
   describe('clicking the send button', () => {
    let sendHandler;

     beforeEach(() => {
      sendHandler = cy.spy();
      mount(<MessageForm onSend={sendHandler} />);

       cy.get('[data-test="messageText"]')
         .type('New message');

       cy.get('[data-test="sendButton"]')
         .click();
     });

     it('clears the text field', () => {
       cy.get('[data-test="messageText"]')
         .should('have.value', '');
     });

   it('calls the send handler', () => {
     expect(sendHandler).to.have.been.calledWith('New message');
    });
   });
 });
