import React, { Component } from 'react';
import UsersForm from './UsersForm';

class OneUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOn: false,
    };
  }

  handleEdit = (updatedUserData) => {
    if (this.state.isEditOn) this.props.onUpdate(this.props.myUser._id, updatedUserData);
    this.setState({ isEditOn: !this.state.isEditOn });
  };

  render() {
    const { name, age, email, password, _id } = this.props.myUser;
    return (
      <div className="card m-2 w-25">
        {this.state.isEditOn ? (
          <UsersForm user={this.props.myUser} onEdit={this.handleEdit}></UsersForm>
        ) : (
          <React.Fragment>
            <div className="card-body">
              <h5 className="card-title">Name: {name}</h5>
              <p className="card-text">Age: {age}</p>
              <p className="card-text">Email: {email}</p>
              <p className="card-text">Password: {password}</p>
            </div>
            <div className="card-footer">
              <button onClick={this.handleEdit} className="btn btn-success">
                Edit
              </button>
              <button onClick={() => this.props.onDelete(_id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default OneUser;
