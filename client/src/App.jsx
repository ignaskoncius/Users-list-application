import React, { Component } from 'react';
import './App.css';
import UsersForm from './components/usersForm';
import { getAllUsers } from './utils/requests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allUsers: [] };
  }

  componentDidMount() {
    this.getAllUsersFromDb();
  }

  getAllUsersFromDb = async () => {
    const allUsers = await getAllUsers();
    this.setState({ allUsers });
    console.log(this.state.allUsers);
  };

  render() {
    return (
      <div className="App container d-flex justify-content-center">
        <UsersForm></UsersForm>
      </div>
    );
  }
}

export default App;
