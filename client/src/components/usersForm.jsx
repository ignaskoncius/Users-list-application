import React, { Component } from 'react';

class UsersForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
  };

  resetState = () => {
    this.setState({ name: '', age: '', email: '', password: '' });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, age, email, password } = this.state;
    const newUserObjToCreate = { name, age, email, password };
    await this.props.onCreateNewUser(newUserObjToCreate);
    this.resetState();
    this.props.onGetAllUsersFromDb();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="w-50">
        <h2>Create new user</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.name}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.age}
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter age"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.email}
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.password}
              type="text"
              className="form-control"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default UsersForm;
