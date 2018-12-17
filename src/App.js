import React, { Component } from 'react';
import MessageForm from './MessageForm';

class App extends Component {
  handleSend = (newMessage) =>{

  }
  render() {
    return (
      <div>
      <MessageForm onSend={this.handleSend} />
      </div>
    );
  }
}

export default App;
