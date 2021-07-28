import React, { Component } from 'react';
import OneUser from './OneUser';

class UsersList extends Component {
  state = {};
  render() {
    if (!this.props.allUsers.length) return <h2>No users to show</h2>;
    return (
      <div>
        <h2>Users list</h2>
        <div className="items-list d-flex flex-wrap">
          {this.props.allUsers.map((user) => (
            <OneUser myUser={user} key={user._id}></OneUser>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersList;
