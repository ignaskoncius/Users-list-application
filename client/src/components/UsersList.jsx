import React, { Component } from 'react';
import OneUser from './OneUser';

class UsersList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Users list</h2>
        <OneUser></OneUser>
      </div>
    );
  }
}

export default UsersList;
