import React, { Component } from 'react';
import OneUser from './OneUser';

class UsersList extends Component {
  state = {};
  render() {
    if (!this.props.allUsers.length) return <h2>No users to show</h2>;
    return (
      <div>
        <h2>Users list</h2>
        {this.props.allUsers.map((user) => (
          <OneUser user={user} key={user._id}></OneUser>
        ))}
      </div>
    );
  }
}

export default UsersList;
