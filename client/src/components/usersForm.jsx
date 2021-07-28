import React, { Component } from 'react';

class UsersForm extends Component {
  state = {};
  render() {
    return (
      <div className="w-50">
        <h2>Create new user</h2>
        <form autoComplete="off">
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="age" placeholder="Enter age" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="password" placeholder="Enter password" />
          </div>
          <button type="button" className="btn btn-success mt-3">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default UsersForm;
