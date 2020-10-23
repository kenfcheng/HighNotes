import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class UserTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    axios
      .delete('mongodb://localhost/KaraokeBuddydb"' + this.props.obj._id)
      .then((res) => {
        console.log("User deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.user}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.city}</td>
        <td>{this.props.obj.state}</td>
        <td>{this.props.obj.country}</td>
        <td>{this.props.obj.aboutMe}</td>
        <td>{this.props.obj.faveSong}</td>
        <td>
          <Link
            className="edit-link"
            to={"/updateUserProfile/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteUser} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
