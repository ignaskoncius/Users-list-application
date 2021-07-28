import React, { Component } from 'react';
import OneUser from './OneUser';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.allUsers.length) return <h2 className="text-center">No users to show</h2>;
    return (
      <div>
        <h2 className="text-center">Users list</h2>
        <div className="items-list d-flex justify-content-center flex-wrap">
          {this.props.allUsers.map((user) => (
            <OneUser
              onUpdate={this.props.onUpdate}
              onDelete={this.props.onDelete}
              myUser={user}
              key={user._id}
            ></OneUser>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersList;
