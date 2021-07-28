import React, { Component } from 'react';

class OneUser extends Component {
  state = {};
  render() {
    const { name, age, email, password } = this.props.myUser;
    return (
      <div className="card m-2 w-25">
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Email: {email}</p>
          <p className="card-text">Password: {password}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default OneUser;
