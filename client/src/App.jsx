import React, { Component } from 'react';
import './App.css';
import UsersForm from './components/usersForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App container d-flex justify-content-center">
        <UsersForm></UsersForm>
      </div>
    );
  }
}

export default App;
