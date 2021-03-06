import React, { Component } from 'react';

class UsersForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    this.props.user && this.getStateFromProps();
  }

  getStateFromProps() {
    const { name, age, email, password } = this.props.user;
    this.setState({ name, age, email, password });
  }

  resetState = () => {
    this.setState({ name: '', age: '', email: '', password: '' });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, age, email, password } = this.state;
    const newUserObjToCreate = { name, age, email, password };
    if (this.props.user) {
      this.props.onEdit(newUserObjToCreate);
      return;
    }
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
      <div className={this.props.user ? 'card-body' : 'w-50'}>
        {this.props.user ? null : <h2 className="text-center">Create new user</h2>}
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
          <button className="btn btn-primary">{this.props.user ? 'Update user' : 'Create user'}</button>
        </form>
      </div>
    );
  }
}

export default UsersForm;
