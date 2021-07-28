import React, { Component } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import { getAllUsers, createUserSend, deleteUser, updateUserData } from './utils/requests';

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

  createNewUser = async (dataToCreateNewUser) => {
    await createUserSend(dataToCreateNewUser);
    this.getAllUsersFromDb();
  };

  handleDelete = async (userId) => {
    await deleteUser(userId);
    this.getAllUsersFromDb();
  };

  updateUser = async (userId, updatedUserDetails) => {
    console.log(userId, updatedUserDetails);
    await updateUserData(userId, updatedUserDetails);
    this.getAllUsersFromDb();
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="d-flex justify-content-center">
            <UsersForm onGetAllUsersFromDb={this.getAllUsersFromDb} onCreateNewUser={this.createNewUser}></UsersForm>
          </div>
          <UsersList
            onUpdate={this.updateUser}
            onDelete={this.handleDelete}
            allUsers={this.state.allUsers || []}
          ></UsersList>
        </div>
      </div>
    );
  }
}

export default App;
